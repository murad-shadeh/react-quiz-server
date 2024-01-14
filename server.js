"use strict";
const express = require("express");
const cors = require("cors");
const { questions } = require("./data/questions.json");
const app = express();
app.use(cors());
console.log(questions);
// constructor
function Question(question, options, correctOption, points) {
  this.question = question;
  this.options = options;
  this.correctOption = correctOption;
  this.points = points;
  Question.allData.push(this);
}
Question.allData = [];

const homeHandler = (req, res) => {
  questions.map(
    (questionItem) =>
      new Question(
        questionItem.question,
        questionItem.options,
        questionItem.correctOption,
        questionItem.points
      )
  );
  res.status(200).json({
    code: 200,
    message: Question.allData,
  });
};
// the end point
app.get("/", homeHandler);

app.listen(3000, () => {
  console.log("Up and running on PORT 3000");
});
