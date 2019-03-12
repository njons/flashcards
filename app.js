// require the express module and assign it to a variable called express
const express = require("express");

// the express function returns an express application, assign it a variable called app
const app = express();

// SET THE VIEW ENGINE TO PUG (if you nest the app.js file you will need to point it to the node_modules)
app.set("view engine", "pug");

// ROUTES OF THE EXPRESS SERVER
// home route, renders the template file named index
app.get("/", (req, res) => {
  res.render("index");
});
// hello route
app.get("/hello", (req, res) => {
  res.send("<h1>Welcome!</h1></br><p>Hello User!</p>");
});

// START SERVER: set up the server with the .listen() method by giving it a port number
app.listen(3000, () => {
  console.log(`server is up and running on port 3000`);
});
