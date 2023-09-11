require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const Pokemon = require("./models/pokemon");
const jsxViewEngine = require("jsx-view-engine");
const mongoose = require("mongoose");

app.set("view engine", "jsx");
app.set("views", "./views");
app.engine("jsx", jsxViewEngine());

//// Database Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

// Middleware
app.use(express.urlencoded({ extended: false }));

// Route
app.get("/", (req, res) => {
  res.send("Welcome to the Pokemon App!");
});

// Index route
app.get("/pokemon", async (req, res) => {
  try {
    const foundPokemon = await Pokemon.find({});
    console.log(foundPokemon);
    res.status(200).render("Index", {
      pokemon: foundPokemon,
    });
  } catch (err) {
    res.status(400).send(err);
  }
});

// New route
app.get("/pokemon/new", (req, res) => {
  res.render("New");
});

// Create route
app.post("/pokemon", async (req, res) => {
  try {
    // if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
    //   req.body.readyToEat = true; //do some data correction
    // } else { //if not checked, req.body.readyToEat is undefined
    //   req.body.readyToEat = false; //do some data correction
    // }
    const createdPokemon = await Pokemon.create(req.body);

    res.status(201).redirect("/pokemon");
  } catch (err) {
    res.status(400).send(err);
  }
});

// Show route
app.get("/pokemon/:id", async (req, res) => {
  try {
    const foundPokemon = await Pokemon.findById(req.params.id);
    res.render("Show", {
      pokemon: foundPokemon,
    });
  } catch (err) {
    res.status(400).send(err);
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
