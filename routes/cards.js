const express = require("express");
const router = express.Router();

// cards route: GET
router.get("/", (req, res) => {
  res.render("card", {
    prompt: "This is a question",
    hint: "this is a clever hint"
  });
});

module.exports = router;
