const express = require("express");
const router = express.Router();

// ROUTES OF THE EXPRESS SERVER
// home route, renders the template file named index
router.get("/", (req, res) => {
  const name = req.cookies.username;
  if (name) {
    res.render("index", { name });
  }
  res.redirect("/hello");
});

// hello route: GET, POST
router.get("/hello", (req, res) => {
  const name = req.cookies.username;
  if (name) {
    res.redirect("/", { name });
  }
  res.render("hello");
});
router.post("/hello", (req, res) => {
  res.cookie("username", req.body.username);
  res.redirect("/");
});

// logout route: GET
router.post("/logout", (req, res) => {
  res.clearCookie("username");
  res.redirect("/");
});

module.exports = router;
