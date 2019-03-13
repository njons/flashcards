// require the express module and assign it to a variable called express
const express = require("express");
//require body parser to be able to pass data to the server
const bodyParser = require("body-parser");
// require cookie parser to be able read data from the cookie
const cookieParser = require("cookie-parser");
// the express function returns an express application, assign it a variable called app
const app = express();

// SET THE VIEW ENGINE TO PUG (if you nest the app.js file you will need to point it to the node_modules)
app.set("view engine", "pug");

// USE MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/static", express.static("public"));

// REQUIRE ROUTES
const mainRoutes = require("./routes");
const cardRoutes = require("./routes/cards");
app.use(mainRoutes);
app.use("/cards", cardRoutes);

// ERROR HANDLING
app.use((req, res, next) => {
  const err = new Error("file not found");
  err.status = 404;
  next(err);
});
app.use((err, req, res, next) => {
  res.locals.error = err;
  if (err.status >= 100 && err.status < 600) res.status(err.status);
  else res.status(500);
  res.render("error");
});

// START SERVER: set up the server with the .listen() method by giving it a port number
app.listen(3000, () => {
  console.log(`server is up and running on port 3000`);
});
