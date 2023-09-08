const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const pokemon = require("./models/pokemon");
const jsxViewEngine = require(jsx - view - engine);

// Route
app.get("/", (req, res) => {
  res.send("Welcome to the Pokemon App!");
});

// Get route
app.get("/pokemon", (req, res) => {
  res.send("/pokemon");
});

app.get("/pokemon/:id", (req, res) => {
  res.send(req.params.id);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
