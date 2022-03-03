const express = require("express");
const app = express();

app.use(express.urlencoded());

let books = require('./db/books.json')
let isLogin = false;

app.set("view engine", "ejs");

app.use((req, res, next) => {
  // isLogin = false;
  // !isLogin = true;

  if (req.url === '/books' && !isLogin) {
    res.redirect('/login');
  }

  next();
});

app.get("/", (req, res) => {
  res.render("index");
});

// localhost:8080/greeting?name=iqbal&job=dev
app.get("/greeting", (req, res) => {
  // const queryName = req.query.name;
  // const queryJob = req.query.job;

  // res.render("hello", {
  //   nama: queryName,
  //   perkerjaan: req.query.job,
  // });

  const name = req.query.name;
  res.render("hello", {
    name,
  });
});

// EJS PAGE BOOK LIST
app.get("/books", (req, res) => {
  res.render("book/list", {
    data: books,
  });
});

// EJS PAGE CREATE BOOK
app.get("/books/create", (req, res) => {
  res.render("book/createForm");
});

// EJS PAGE EDIT BOOK
app.get("/books/edit/:id", (req, res) => {
  const book = books.find((item) => item.id == req.params.id);

  res.render("book/editForm", {
    data: book,
  });
});

// EJS PAGE LOGIN
app.get("/login", (req, res) => {
  res.render("login", {
    error: '',
  });
});


// API CREATE NEW BOOK
app.post("/books/post", (req, res) => {
  const { title, author, price } = req.body;

  const id = books[books.length - 1].id + 1;
  const book = {
    id,
    title,
    author,
    price,
  };

  books.push(book);
  // res.json(book); // sebelum nya
  res.redirect('/books'); // sekarang
});

// API UPDATE BOOK
app.post("/books/update/:id", (req, res) => {
  const book = books.find((item) => item.id == req.params.id);
  const { title, author, price } = req.body;

  const updatedBook = {
    id: book.id,
    title: title,
    author: author,
    price: price
  }

  books = books.map((item) => (item.id == req.params.id ? updatedBook : item));

  res.redirect('/books')
});

// API DELETE BOOK
app.get("/books/delete/:id", (req, res) => {
  const index = books.findIndex(item => item.id == req.params.id);

  books.splice(index, 1);

  res.redirect('/books')
});

// API LOGIN
app.post("/login/auth", (req, res) => {
  const user = require('./db/user.json');

  if (user.email === req.body.uEmail && user.password === req.body.uPassword) {
    isLogin = true;
    res.redirect('/books');
  } else {
    res.render("login", {
      error: 'Your password and email was wrong',
    });
  }
});

app.listen(8080, () => console.log("Server Running ..."));
