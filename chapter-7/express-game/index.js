const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const game = require("./routes/game");
const history = require("./routes/history");
const biodata = require("./routes/biodata");

app.use(game);
app.use(history);
app.use("/biodata", biodata);

const { Game, Biodata, History } = require("./models");
app.get("/", async (_, res) => {
  const data = await Game.findAll({
    include: [Biodata, History],
  });
  res.json(data);
});

app.get("/api/games", async (req, res) => {
  const offset = req.query.page ? (req.query.page - 1) * 2 : 0;
  // page=1 = offset 0
  // page=2 = offset 2
  console.log("offset", offset);

  const games = await Game.findAll({
    include: [Biodata],
    offset,
    limit: 2,
  });

  res.json(games);
});

app.listen(3000, () => {
  console.log("Your apps running in http://localhost:3000/ ...");
});
