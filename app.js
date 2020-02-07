require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const chatId = -371800553;
const token = '820340509:AAG8XfVwwGJY7PvvDsiiz7bPmSy0qX3UXKc';
const path = require("path");
const Telegram = require("telegraf/telegram");

const Telegraf = require("telegraf");
const bot = new Telegram(token);
// bot.use(ctx => {
//   telegram.sendMessage(ctx.from.id, `Your Telegram id: ${ctx.from.id}`);
// });
// bot.startPolling();

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
  let data = bot.sendMessage(chatId, "Name: " + req.body.name + "\n" + "Email: " +  req.body.email + "\n" + "Message: " +  req.body.message);
  data.then((res) => {
    console.log(res);
  }).catch(() => {

  });
  console.log(data);
  res.redirect('/');
});

app.listen(3000, () => console.log("Example app listening on port 3000!"));


// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

// app.use(express.json());
// app.post("/", (req, res) => {
//   telegram.sendMessage(
//     process.env.SHEERLIN_ID,
//     `Name: ${req.body.name}
//     Email Address: ${req.body.email}
//     Subject: ${req.body.subject}
//     Message: ${req.body.message}`
//   );
// });
// fetch(url, {
//   method: 'POST',
//   mode: 'cors',
//   body: JSON.stringify({ …this.state.form}),
//   headers: {
//   'Content-Type': 'application/json',
//   },
// });

// const express = require("express");
// const bodyParser = require("body-parser");
// const exphbs = require("express-handlebars");
// const path = require("path");
// const app = express();
// const TelegramBot = require("node-telegram-bot-api");

// const token = "820340509:AAG8XfVwwGJY7PvvDsiiz7bPmSy0qX3UXKc";
// const bot = new TelegramBot(token, { polling: true });

// bot.on("message", msg => {
//   console.log(msg);
//   bot.sendMessage(msg.chat.id, "Hello " + msg.from.first_name);
// });

// //View engine setup
// app.engine("handlebars", exphbs());
// app.set("view engine", "handlebars");

// // //Body Parser Middleware
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// // // Static folder
// app.use("/public", express.static(path.join(__dirname, "public")));

// app.get("/", (req, res) => {
//   res.render("contact", { layout: false });
// });

// app.post("/send", (req, res) => {
//   console.log(req.body);
// });

// ;

// app.listen(3000, () => console.log("Server started..."));
