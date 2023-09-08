const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const pokemon = require("./models/pokemon");
const jsxViewEngine = require("jsx-view-engine");

app.set("view engine", "jsx");
app.set("views", "./views");
app.engine("jsx", jsxViewEngine());

// Route
app.get("/", (req, res) => {
  res.send("Welcome to the Pokemon App!");
});

// Get route
app.get("/pokemon", (req, res) => {
  res.render("Index", { pokemon });
});

app.get("/pokemon/:id", (req, res) => {
  res.render("Show", {
    pokemon: pokemon[req.params.id],
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
