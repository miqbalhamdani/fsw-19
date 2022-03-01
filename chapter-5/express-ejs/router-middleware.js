const express = require("express");
const app = express();

app.get("/hola", (req, res) => {
  res.send("hola");
});

const router = require("./router");
app.use(router);


app.listen(3000, () => {
  console.log("Example app listening on port 3000");
});
