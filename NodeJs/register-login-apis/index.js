const express = require("express");
const bcrypt = require("bcrypt");
const app = express();
app.use(express.json());
const path = require("path");
const sqlite3 = require("sqlite3");
const { open } = require("sqlite");
const dbPath = path.join(__dirname, "users.db");
let db;

const initializeDB = async () => {
  try {
    db = await open({ filename: dbPath, driver: sqlite3.Database });
    app.listen(3004, () => {
      console.log("users server started on 3004 port");
    });
  } catch (e) {
    console.log(`DB Error: ${e.message}`);
    process.exit(1);
  }
};

initializeDB();

//Register User API
app.post("/users/", async (request, response) => {
  const { username, name, password, gender, location } = request.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const userQuery = `SELECT * FROM user WHERE username='${username}'`;
  const user = await db.get(userQuery);
  if (user === undefined) {
    const loginUserQuery = `
    INSERT INTO user(username,name,password,gender,location) VALUES
    ('${username}','${name}','${hashedPassword}','${gender}','${location}');`;
    await db.run(loginUserQuery);
    response.send("User Registered Successfully");
  } else {
    response.status(400);
    response.send("User Already Exists");
  }
});

//Login User API
app.post("/login/", async (request, response) => {
  const { username, password } = request.body;
  const userQuery = `SELECT * FROM user
  WHERE username='${username}';`;
  const user = await db.get(userQuery);
  if (user !== undefined) {
    const isPassowordCorrect = await bcrypt.compare(password, user.password);
    if (isPassowordCorrect === true) {
      response.send("User Login Successful");
    } else {
      response.status(400);
      response.send("Invalid Password");
    }
  } else {
    response.status(400);
    response.send("Invalid User");
  }
});
