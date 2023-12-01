//network calling

const express = require("express");
const addDays = require("date-fns/addDays");
const app = express();
app.get("/", (request, response) => {
  response.send("Home Route is Opened.");
});
app.get("/about", (request, response) => {
  response.send("About Route is Opened");
});
app.listen(3004, () => {
  console.log("server started on 3004 port");
});

// date-fns package

const result = addDays(new Date(2021, 0, 11), 10);

console.log(result);
