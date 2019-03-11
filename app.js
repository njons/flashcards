// require the express module and assign it to a variable called express
const express = require("express");
// the express function returns an express application, assign it a variable called app
const app = express();

// ROUTES OF THE EXPRESS SERVER
// home route
app.get("/", (req, res) => {
  res.send("Hello world!");
});
// hello route
app.get("/hello", (req, res) => {
  res.send("<h1>Welcome!</h1></br><p>Hello User!</p>");
});

// START SERVER: set up the server with the .listen() method by giving it a port number
app.listen(3000, () => {
  console.log(`server is up and running on port 3000`);
});
