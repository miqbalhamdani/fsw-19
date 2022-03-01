const express = require("express");
const app = express();
const router = require("./router");

app.get('/ini-error', (req, res) => {
  iniError;
})

app.use(router);

app.use(function(err, req, res, next) {
  console.log(err);
  res.status(500).json({
    status: "fail",
    errors: err.message,
  });
});

app.use((req, res, next) => {
  res.status(404).json({
    status: "fail",
    errors: "are you lost?",
  });
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000");
});
