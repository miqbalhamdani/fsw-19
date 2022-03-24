const express = require("express");
const app = express();

app.use(express.json());

const { Product } = require("./models");

// 1 req
// 2 res
// Get All Data
app.get("/", async (_, res) => {
  const data = await Product.findAll();
  res.json(data);
});

// Create Data
app.post("/", async (req, res) => {
  const newProduct = await Product.create({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    store: req.body.store,
  });

  res.json(newProduct);
});

// Update Data
app.put("/:id", async (req, res) => {
  Product.findByPk(req.params.id).then((product) =>
    Product.update(
      {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        store: req.body.store,
      },
      { where: { id: req.params.id } }
    ).then(newProduct => res.json(newProduct))
  ).catch(() => res.json('Data Not Found'));
});

app.listen(3000);
