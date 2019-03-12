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
// ROUTES OF THE EXPRESS SERVER
// home route, renders the template file named index
app.get("/", (req, res) => {
  res.render("index");
});
// hello route
app.get("/hello", (req, res) => {
  res.render("hello", { name: req.cookies.username });
});
app.post("/hello", (req, res) => {
  // console.dir(req.body);
  res.cookie("username", req.body.username);

  res.render("hello", { name: req.body.username });
});

// card route for showing cards
app.get("/cards", (req, res) => {
  res.render("card", {
    prompt: "This is a question",
    hint: "this is a clever hint"
  });
});

// START SERVER: set up the server with the .listen() method by giving it a port number
app.listen(3000, () => {
  console.log(`server is up and running on port 3000`);
});
