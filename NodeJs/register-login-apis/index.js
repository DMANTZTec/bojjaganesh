const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
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
      const payload = { username, password };
      const jwtToken = jwt.sign(payload, "ganikey");
      response.send({ jwtToken });
    } else {
      response.status(400);
      response.send("Invalid Password");
    }
  } else {
    response.status(400);
    response.send("Invalid User");
  }
});

//Authenticate middleware function
const authenticateToken = async (request, response, next) => {
  let jwtToken;
  const { authorization } = request.headers;
  if (authorization !== undefined) {
    jwtToken = authorization.split(" ")[1];
  }
  if (jwtToken !== undefined) {
    jwt.verify(jwtToken, "ganikey", async (error, payload) => {
      if (error) {
        response.status(401);
        response.send("Invalid Access Token");
      } else {
        request.user = payload;
        next();
      }
    });
  }
};

//Get Books API
app.get("/books/", authenticateToken, async (request, response) => {
  const {
    search_q = "",
    sort_by = "book_id",
    sort_order = "ASC",
  } = request.query;
  const getBooksQuery = `SELECT * FROM books WHERE title LIKE '%${search_q}%' ORDER BY ${sort_by} ${sort_order};`;
  const books = await db.all(getBooksQuery);
  response.send(books);
});

// Get specific book API
app.get("/books/:bookId", authenticateToken, async (request, response) => {
  const { bookId } = request.params;
  const getBookQuery = `
    SELECT * FROM books WHERE book_id=${bookId};`;
  const bookDetails = await db.get(getBookQuery);
  response.send(bookDetails);
});

//Add Book API
app.post("/books/", authenticateToken, async (request, response) => {
  const bookDetails = request.body;
  const {
    title,
    authorId,
    rating,
    ratingCount,
    reviewCount,
    description,
    pages,
    dateOfPublication,
    editionLanguage,
    price,
    onlineStores,
  } = bookDetails;
  const addBookQuery = `
    INSERT INTO
      books (title,author_id,rating,rating_count,review_count,description,pages,date_of_publication,edition_language,price,online_stores)
    VALUES
      (
        '${title}',
         ${authorId},
         ${rating},
         ${ratingCount},
         ${reviewCount},
        '${description}',
         ${pages},
        '${dateOfPublication}',
        '${editionLanguage}',
         ${price},
        '${onlineStores}'
      );`;

  const dbResponse = await db.run(addBookQuery);
  const bookId = dbResponse.lastID;
  response.send({ bookId: bookId });
});

// Update Book API
app.put("/books/:bookId/", authenticateToken, async (request, response) => {
  const { bookId } = request.params;
  const bookDetails = request.body;
  const {
    title,
    authorId,
    rating,
    ratingCount,
    reviewCount,
    description,
    pages,
    dateOfPublication,
    editionLanguage,
    price,
    onlineStores,
  } = bookDetails;
  const updateBookQuery = `
      UPDATE
        books
      SET
        title='${title}',
        author_id=${authorId},
        rating=${rating},
        rating_count=${ratingCount},
        review_count=${reviewCount},
        description='${description}',
        pages=${pages},
        date_of_publication='${dateOfPublication}',
        edition_language='${editionLanguage}',
        price=${price},
        online_stores='${onlineStores}'
      WHERE
        book_id = ${bookId};`;
  await db.run(updateBookQuery);
  response.send("Book Updated Successfully");
});

//Delete Book API
app.delete("/books/:bookId/", authenticateToken, async (request, response) => {
  const { bookId } = request.params;
  const deleteBookQuery = `
    DELETE FROM books WHERE book_id=${bookId};`;
  await db.run(deleteBookQuery);
  response.send("Book Deleted Successfully");
});

//Get Author Books API
app.get(
  "/authors/:authorId/books/",
  authenticateToken,
  async (request, response) => {
    const { authorId } = request.params;
    const getAuthorBooksQuery = `
      SELECT
       *
      FROM
       books
      WHERE
        author_id = ${authorId};`;
    const booksArray = await db.all(getAuthorBooksQuery);
    response.send(booksArray);
  }
);

//User Profile API
app.get("/profile/", authenticateToken, async (request, response) => {
  const { user } = request;
  const userProfileQuery = `SELECT * FROM user  WHERE username='${user.username}';`;
  const userDetails = await db.get(userProfileQuery);
  response.send(userDetails);
});
