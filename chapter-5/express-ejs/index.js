const express = require("express");
const app = express();
const port = 3000;

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/products", (req, res) => {
  res.json(["Apple", "Redmi", "One Plus One"]);
});

app.get("/orders", (rq, rs) => {
  rs.json([
    { id: 1, paid: false, user_id: 1 },
    { id: 2, paid: false, user_id: 1 },
  ]);
});

app.get("/products/category/technology", (req, res) => {
  res.send("im in category");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
