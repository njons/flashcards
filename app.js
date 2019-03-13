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
// custom middleware creating specific error objects
// app.use((req, res, next) => {
//   const err = new Error("oh no!");
//   err.status = 500;
//   next(err);
// });

// ROUTES OF THE EXPRESS SERVER
// home route, renders the template file named index
app.get("/", (req, res) => {
  const name = req.cookies.username;
  if (name) {
    res.render("index", { name });
  }
  res.redirect("/hello");
});

// hello route: GET, POST
app.get("/hello", (req, res) => {
  const name = req.cookies.username;
  if (name) {
    res.redirect("/", { name });
  }
  res.render("hello");
});
app.post("/hello", (req, res) => {
  res.cookie("username", req.body.username);
  res.redirect("/");
});

// cards route: GET
app.get("/cards", (req, res) => {
  res.render("card", {
    prompt: "This is a question",
    hint: "this is a clever hint"
  });
});

// logout route: GET
app.post("/logout", (req, res) => {
  res.clearCookie("username");
  res.redirect("/");
});

// ERROR HANDLING
app.use((req, res, next) => {
  const err = new Error("file not found");
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status);
  res.render("error", err);
});

// START SERVER: set up the server with the .listen() method by giving it a port number
app.listen(3000, () => {
  console.log(`server is up and running on port 3000`);
});
