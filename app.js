const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
let alert = require('alert');
const mongoose = require("mongoose");
const { isInteger } = require("lodash");
var session = require('express-session');
const { Cookie } = require("express-session");


const app = express();
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));



app.use(session({
  secret : 'some secret',
  Cookie : {mazAge : 30000},
  saveUniniftialized:false,
}))
 var ssn;

mongoose.connect("mongodb://localhost:27017/questionDB");
//questionSchema
const questionSchema = new mongoose.Schema({
  question: { type: String, required: true },
  answer: { type: String, default: true },
},
  // { timestamps: true }
);


const Question = new mongoose.model("Question", questionSchema)

//end questionSchema

//playerSchema

const playerSchema = new mongoose.Schema({
  PlayerName: { type: String, required: true, },
  CurrentStage: { type: String, default: "00" }
},
  { timestamps: true }

);

const Player = new mongoose.model("Player", playerSchema);


// playerSchema end
//Schema end

//requests

app.get("/Start", function (req, res) {
  res.render("START");


});




app.post("/Start", function (req, res) {
  // res.render("START");
 ssn = req.session;
 var contestant;

 

  ssn.contestant = req.body.Username;
  const User = new Player({
    PlayerName: ssn.contestant,
    
    
  })
  
  User.save();
  
  

  res.redirect("rules");
}

);




app.post("/rules", function (req, res) {
  // res.render("START");

  console.log(req.body);
  res.render("questions/round1/question11");




}


);


app.get("/rules", function (req, res) {
  res.render("rules");
});

app.get("/contact", function (req, res) {
  res.render("contact");
});




app.post("/questions/round1/question11", function (req, res) {
  // res.render("START");
ssn = req.session;
  var nextQuestion = req.body.play;
  console.log(nextQuestion);
  var answer = req.body.answer;
  var contestant;
  console.log(answer);
console.log(ssn.contestant);
  Player.findOneAndUpdate(
    { PlayerName: ssn.contestant },
    { CurrentStage: "question11" },
    { new: true },
    function (err){
 if(err){
  console.log(err);
 }
 else{console.log("no error")}
    }




  );

  Question.findOne({ question: nextQuestion }, function (err, foundQuestion) {
    if (err) {
      console.log(err);
    } else {
      if (foundQuestion) {
        if (foundQuestion.answer === answer) {
          res.render("questions/round1/" + nextQuestion);
        }
        else {
          // res.redirect("/questions/round1/question11");
          alert("your answer is incorrect ,try again");
        }
      }
    }
  });
});





app.post("/questions/round1/question12", function (req, res) {
  ssn=req.session;
  var nextQuestion = req.body.play;
  console.log(nextQuestion);
  var answer = req.body.answer;
  console.log(answer);
  var contestant;

  Player.findOneAndUpdate(
    { PlayerName: ssn.contestant },
    { CurrentStage: "question12" },
    { new: true },
    function (err){
 if(err){
  console.log(err);
 }
 else{console.log("no error")}
    }




  );

  
  

  Question.findOne({ question: nextQuestion }, function (err, foundQuestion) {
    if (err) {
      console.log(err);
    } else {
      if (foundQuestion) {
        if (foundQuestion.answer === answer) {
          res.render("questions/round1/" + nextQuestion);
        }
        else {
          // res.redirect("/questions/round1/question11");
          alert("your answer is incorrect ,try again");
        }
      }
    }
  });
}
);

app.post("/questions/round1/question13", function (req, res) {
  ssn=req.session
  var nextQuestion = req.body.play;
  console.log(nextQuestion);
  var answer = req.body.answer;
  console.log(answer);

  var contestant;

  Player.findOneAndUpdate(
    { PlayerName: ssn.contestant },
    { CurrentStage: "question13" },
    { new: true },
    function (err){
 if(err){
  console.log(err);
 }
 else{console.log("no error")}
    }




  );

  Question.findOne({ question: nextQuestion }, function (err, foundQuestion) {
    if (err) {
      console.log(err);
    } else {
      if (foundQuestion) {
        if (foundQuestion.answer === answer) {
          res.render("questions/round1/" + nextQuestion);
        }
        else {
          res.redirect("/questions/round1/question11");
          alert("your answer is incorrect ,try again");
        }
      }
    }
  });
}
);




app.post("/questions/round1/question14", function (req, res) {
  ssn = req.body
  var nextQuestion = req.body.play;
  console.log(nextQuestion);
  var answer = req.body.answer;
  console.log(answer);

  var contestant;
  Player.findOneAndUpdate(
    { PlayerName: ssn.contestant },
    { CurrentStage: "question14" },
    { new: true },
    function (err){
 if(err){
  console.log(err);
 }
 else{console.log("no error")}
    }




  );
  Question.findOne({ question: nextQuestion }, function (err, foundQuestion) {
    if (err) {
      console.log(err);
    } else {
      if (foundQuestion) {
        if (foundQuestion.answer === answer) {
          res.render("questions/round1/" + nextQuestion);
        }
        else {
          // res.redirect("/questions/round1/question11");
          alert("your answer is incorrect ,try again");
        }
      }
    }
  });

}
);








app.listen(3000, function () {

  console.log("server started on port 3000");
})