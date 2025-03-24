const express = require("express");
const app = express();
const expressSession = require("express-session");
const cookieParser = require("cookie-parser");
const path = require("path");
require("dotenv").config();
const flash = require("connect-flash");

const db = require("./config/mongoose-connection");
const index = require("./routes/index");
const usersRouter = require("./routes/userRouter");
const contractorRouter = require("./routes/contractorRouter");
const productsRouter = require("./routes/productsRouter");
const gallery = require("./routes/gallery");
const news = require("./routes/news");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  expressSession({
    resave: false,
    saveUninitialized: false,
    secret: process.env.EXPRESS_SESSION_SECRET,
  })
);
app.use(flash());
app.use("/", index);
app.use("/gallery", gallery);
app.set("view engine", "ejs");
app.use("/contractors", contractorRouter);
app.use("/", usersRouter);
app.use("/products", productsRouter);
app.use("/news", news);

app.listen(3000);
