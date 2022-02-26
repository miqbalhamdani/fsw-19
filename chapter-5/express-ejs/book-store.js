const express = require("express");
const app = express();

const books = require("./db/books.json");

app.get("/books", (req, res) => {
  res.json(books);
});

app.get("/books/:id", (req, res) => {
  const bookById = books.find((item) => item.id == req.params.id);
  res.json(bookById);
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000");
});
