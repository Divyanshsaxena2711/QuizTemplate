const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
let alert = require('alert'); 
const mongoose = require("mongoose");
const { isInteger } = require("lodash");

const app = express();
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));





mongoose.connect("mongodb://localhost:27017/questionDB");

const questionSchema = new mongoose.Schema({
  question: { type: String, required: true  },
  answer: { type: String, default:true },
},
{ timestamps: true }
);

const Question = new mongoose.model("Question",questionSchema)
app.get("/Start", function (req, res) {
  res.render("START");


});

app.post("/Start", function (req, res) {
  // res.render("START");


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


// app.get("/questions/round1/question11", function (req, res) {
//   res.render("questions/round1/question11");
// });


// app.get("/questions/round1/question12", function (req, res) {
//   res.render("questions/round1/question12");
// });
// app.get("/questions/round1/question13", function (req, res) {
//   res.render("questions/round1/question13");
// });
// app.get("/questions/round1/question14", function (req, res) {
//   res.render("questions/round1/question14");
// });

app.post("/questions/round1/question11", function (req, res) {
  // res.render("START");
  
  var nextQuestion=req.body.play;
  console.log(nextQuestion);
  var answer=req.body.answer;
  console.log(answer);
 
  Question.findOne({question: nextQuestion }, function(err, foundQuestion){
    if (err) {
      console.log(err);
    } else {
      if (foundQuestion) {
        if (foundQuestion.answer === answer) {
          res.render("questions/round1/"+nextQuestion);
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
  var nextQuestion=req.body.play;
  console.log(nextQuestion);
  var answer=req.body.answer;
  console.log(answer);
 
  Question.findOne({question: nextQuestion }, function(err, foundQuestion){
    if (err) {
      console.log(err);
    } else {
      if (foundQuestion) {
        if (foundQuestion.answer === answer) {
          res.render("questions/round1/"+nextQuestion);
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
  var nextQuestion=req.body.play;
  console.log(nextQuestion);
  var answer=req.body.answer;
  console.log(answer);
 
  Question.findOne({question: nextQuestion }, function(err, foundQuestion){
    if (err) {
      console.log(err);
    } else {
      if (foundQuestion) {
        if (foundQuestion.answer === answer) {
          res.render("questions/round1/"+nextQuestion);
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
  var nextQuestion=req.body.play;
  console.log(nextQuestion);
  var answer=req.body.answer;
  console.log(answer);
 
  Question.findOne({question: nextQuestion }, function(err, foundQuestion){
    if (err) {
      console.log(err);
    } else {
      if (foundQuestion) {
        if (foundQuestion.answer === answer) {
          res.render("questions/round1/"+nextQuestion);
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