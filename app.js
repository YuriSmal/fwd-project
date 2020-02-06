const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const path = require("path");
const app = express();

//View engine setup
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

//Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Static folder
app.use("/public", express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("contact", { layout: false });
});

app.listen(3000, () => console.log("Server started..."));
