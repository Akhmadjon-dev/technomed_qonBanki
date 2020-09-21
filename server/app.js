/* eslint-disable no-undef */
const express = require("express");
const path = require("path");
const logger = require("morgan");
const mongoose = require("mongoose");
const session = require("express-session");
const cors = require("cors");
const MongoStore = require("connect-mongo")(session);
const compression = require("compression");
const isLoggedIn = require("./utils/index").authHandler;

const port = process.env.PORT || 8008;

const database = "mongodb://localhost/qonbanki";

const usersRouter = require("./routes/users");
const authRouter = require("./routes/auth");
const appPersonsRouter = require("./routes/appPersons");
const bloodsRouter = require("./routes/bloods");
const adminsRouter = require("./routes/admins");

const app = express();

const corsOptions = {
  credentials: true,
  origin: true,
};
app.use(express.static(path.join(__dirname, "public")));
app.use(compression());
app.use(cors(corsOptions));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const store = new MongoStore({
  url: database,
  autoRemove: "interval",
  autoRemoveInterval: 1,
});
app.use(
  session({
    secret: "mahfiy kalitni topa olmaysiz",
    resave: false,
    saveUninitialized: true,
    store,
  })
);

app.use(isLoggedIn);
app.use("/users", usersRouter);
app.use("/auth", authRouter);
app.use("/bloods", bloodsRouter);
app.use("/admins", adminsRouter);
app.use("/application-persons", appPersonsRouter);

mongoose
  .connect(database, { useNewUrlParser: true, useFindAndModify: false })
  .then(() => {
    console.log("Database loaded successfully");
  })
  .catch((err) => console.log(err));

app.listen(port, () =>
  console.log(`App is running on server localhost:${port}`)
);
module.exports = app;
