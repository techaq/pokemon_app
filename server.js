const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to the Pokemon App!");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
