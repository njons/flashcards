// require the express module and assign it to a variable called express
const express = require("express");

// the express function returns an express application, assign it a variable called app
const app = express();

// add routes to teh express server
app.get("/"); // home route

// set up the server with the .listen() method by giving it a port number
app.listen(3000, () => {
  console.log(`server is up and running on port 3000`);
});
