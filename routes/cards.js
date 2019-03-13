const express = require("express");
const router = express.Router();
const { data } = require("../data/flashcardData.json");
const { cards } = data;
const getRandomArbitrary = (min, max) => {
  return Math.random() * (max - min) + min;
};

// cards route: GET
router.get("/", (req, res) => {
  let flashcardId = Math.floor(Math.random() * cards.length);
  res.redirect(`/cards/${flashcardId}?side=question`);
});

// cards route by id: GET
router.get("/:id", (req, res) => {
  // reads the querystring param
  const { side } = req.query;
  // reads the id param
  const { id } = req.params;

  if (!side) {
    return res.redirect(`/cards/${id}?side=question`);
  }
  const { hint } = cards[id];
  const text = cards[id][side];
  let templateData = { id, text };

  // render different things depending on 'side' param given in the url
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
