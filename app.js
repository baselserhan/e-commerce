const express = require("express");
const bodyparser = require("body-parser");
const controllers = require("./src/controllers");

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.get("/", (req, res, next) => {
  res.json("Done");
});
app.post("/register", controllers.register);
// app.post("/login", login);

const port = 3000;

app.listen(port, () => {
  console.log(`Server run on ${port}`);
});
module.exports = app;
