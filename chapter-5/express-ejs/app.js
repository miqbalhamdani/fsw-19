const express = require("express");
const app = express();

app.get("/", (req, res) => {
  const { name, job } = req.query;

  res.send(`Hello im ${req.query.name}, ${job} developer`);
});

app.get("/:category/subcategory/:subcategory", (req, res) => {
  console.log(req.params);
  res.send(
    `category nya adalah ${req.params.category}, dan sub category nya adalah ${req.params.subcategory}`
  );
});

app.listen(3000, () => {
  console.log("Your apps was running ...");
});
