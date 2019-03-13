const express = require("express");
const router = express.Router();
const { data } = require("../data/flashcardData.json");
const { cards } = data;

// cards route: GET
router.get("/:id", (req, res) => {
  const { side } = req.query;
  const { id } = req.params;
  const { hint } = cards[id];
  const text = cards[id][side];
  let templateData = { id, text };

  if (side === "question") {
    templateData.hint = hint;
    templateData.sideToShow = "answer";
    templateData.sideToShowDisplay = "Answer";
  } else if (side === "answer") {
    templateData.sideToShow = "question";
    templateData.sideToShowDisplay = "Question";
  }

  res.render("card", templateData);
});

module.exports = router;
