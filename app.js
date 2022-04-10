
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dailyChallenge = require(__dirname + "/daily-word.js")

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb+srv://ryhhill1998:Treeko2004@cluster0.insqq.mongodb.net/wordleDB?retryWrites=true&w=majority");

const fullWordList = dailyChallenge.getWordList();
let chosenWord = "";
let wordToday = "";
let allWords = "";

// Create word list
const wordListsSchema = new mongoose.Schema({
  name: String,
  words: Array
});

const WordList = mongoose.model("WordList", wordListsSchema);


// Create daily word schema
const dailyWordsSchema = new mongoose.Schema({
  date: String,
  word: String
});

const DailyWord = mongoose.model("DailyWord", dailyWordsSchema);

// Find date today
const date = new Date();
const shortDate = date.toLocaleDateString("en-GB");


// App functionality
// Homepage get request
app.get("/", function(req, res) {

  WordList.findOne({name: "general"}, function(err, wordList) {
    if (err) {
      console.log(err);
    } else {
      if (!wordList) {
        const newWordList = new WordList({
          name: "general",
          words: fullWordList
        });
        newWordList.save();
      }
    }
  });

  res.render("game-display");
});

// Daily challenge get request
app.get("/daily-challenge", function(req, res) {

  WordList.findOne({name: "general"}, function(err, wordList) {
    if (err) {
      console.log(err);
    } else {
      const listOfWords = wordList.words;
      const randomIndex = [Math.floor(Math.random() * listOfWords.length)];
      chosenWord = listOfWords[randomIndex];
      wordToday = chosenWord.toUpperCase();
    }

    DailyWord.findOne({date: shortDate}, function(err, dailyWord) {
      if (err) {
        console.log(err);
      } else {
        if (dailyWord) {
          wordToday = dailyWord.word;
          res.render("daily-challenge", {dailyWord: wordToday});
        } else {
          const newDailyWord = new DailyWord({
            date: shortDate,
            word: wordToday
          });
          newDailyWord.save();
          WordList.findOneAndUpdate({name: "general"}, {$pull: {words: chosenWord}}, function(err, WordList) {
            if (err) {
              console.log(err);
            } else {
              console.log("Word successfully removed from list.");
            }
          });
          res.redirect("/daily-challenge");
        }
      }
    });

  });

});


let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}


app.listen(port, function() {
  console.log("Server started successfully");
});
