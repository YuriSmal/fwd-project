require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const chatId = -371800553;
const token = "820340509:AAG8XfVwwGJY7PvvDsiiz7bPmSy0qX3UXKc";
const path = require("path");
const Telegram = require("telegraf/telegram");

const Telegraf = require("telegraf");
const bot = new Telegram(token);

// //View engine setup
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

// //Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// // Static folder
app.use("/public", express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("contact", { layout: false });
});

app.post("/send", (req, res) => {
  console.log(req.body);
  let data = bot.sendMessage(
    chatId,
    "Ви отримали нове звернення:" +
      "\n" +
      "Ім'я: " +
      req.body.name +
      "\n" +
      "Електронна адреса: " +
      req.body.email +
      "\n" +
      "Телефон: " +
      req.body.phone +
      "\n" +
      "Повідомлення: " +
      req.body.message
  );
  data.then(() => { 
    res.status(200).send("Message sent");
    console.log("Message sent");
  }).catch(() => {
    res.status(404).end("Error has occured");
    console.log("Error has occured")
  });
  console.log(data);
  res.redirect("/");
});

app.listen(3000, () => console.log("Example app listening on port 3000!"));
