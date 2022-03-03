const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(morgan("dev"));

app.use(express.json());

let books = require("./db/books.json");

app.get("/books", (req, res) => {
  res.json(books);
});

app.get("/book/:id", (req, res) => {
  const bookById = books.find((item) => item.id == req.params.id);
  res.json(bookById);
});

app.post("/book/", (req, res) => {
  const { title, author, price } = req.body;

  const id = books[books.length - 1].id + 1;
  const book = {
    id,
    title,
    author,
    price,
  };

  books.push(book);
  res.json(book);
});

app.put("/book/:id", (req, res) => {
  const book = books.find((item) => item.id == req.params.id);

  const { title, author, price } = req.body;

  const updatedBook = {
    id: book.id,
    title: title,
    author: author,
    price: price
  }

  books = books.map((item) => (item.id == req.params.id ? updatedBook : item));

  res.json(updatedBook);
});

app.delete("/book/:id", (req, res) => {
  const index = books.findIndex(item => item.id == req.params.id);

  books.splice(index, 1);

  res.json({
    message: `Book dengan id ${req.params.id} berhasil di hapus`,
  });
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000");
});
