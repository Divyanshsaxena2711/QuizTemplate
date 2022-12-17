const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
let alert = require('alert'); 


const app = express();
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));


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
  res.redirect("/questions/round1/question11");




}


);


app.get("/rules", function (req, res) {
  res.render("rules");
});
app.get("/contact", function (req, res) {
  res.render("contact");
});


app.get("/questions/round1/question11", function (req, res) {
  res.render("questions/round1/question11");
});


app.get("/questions/round1/question12", function (req, res) {
  res.render("questions/round1/question12");
});
app.get("/questions/round1/question13", function (req, res) {
  res.render("questions/round1/question13");
});
app.get("/questions/round1/question14", function (req, res) {
  res.render("questions/round1/question14");
});

app.post("/questions/round1/question11", function (req, res) {
  // res.render("START");
  
  var nextQuestion=req.body.play;
  console.log(nextQuestion);
  var answer=req.body.answer;
  if (answer === "ans") {
    res.redirect(nextQuestion);
    console.log("hey");
  }
  else {
    res.redirect("/questions/round1/question11");
    alert("your answer is incorrect ,try again");
  }

}
);



app.post("/questions/round1/question12", function (req, res) {
  // res.render("START");
  var answer=req.body.answer;
  var nextQuestion=req.body.play;
  console.log(nextQuestion);
  if (answer === "ans") {
    res.redirect(nextQuestion);
    // console.log("hey")
  }
  else {
    res.redirect("/questions/round1/question12");
    alert("your answer is incorrect ,try again");
  }

}
);

app.post("/questions/round1/question13", function (req, res) {
  // res.render("START");
  var answer=req.body.answer;
  var nextQuestion=req.body.play;
  console.log(nextQuestion);
  if (answer === "ans") {
    res.redirect(nextQuestion);
    console.log("hey")
  }
  else {
    res.redirect("/questions/round1/question13");
    alert("your answer is incorrect ,try again");
  }

}
);
app.post("/questions/round1/question14", function (req, res) {
  var answer=req.body.answer;
  var nextQuestion=req.body.play;
  console.log(nextQuestion);
  if (answer === "ans") {
    res.redirect(nextQuestion)
    console.log("hey")
  }
  else {
    res.redirect("/questions/round1/question14");
    alert("your answer is incorrect ,try again");
  }

}
);








// );

// app.post("/question11", function (req, res) {
//   // res.render("START");
//   var answer = req.body.answer;
//   if (answer === "ans") {
//     res.redirect("question12")
//     console.log("hey")
//   }
//   else {

//     res.redirect("question11");
//     alert("your answer is incorrect ,try again");
//   }

// }


// );
// app.post("/question12", function (req, res) {
//   // res.render("START");
//   var answer = req.body.answer;
//   if (answer === "ans") {
//     res.redirect("question13")
//     console.log("hey")
//   }
//   else {

//     res.redirect("question12");
//     alert("your answer is incorrect ,try again");
//   }

// }


// );
// app.post("/question13", function (req, res) {
//   // res.render("START");
//   var answer = req.body.answer;
//   if (answer === "ans") {
//     res.redirect("q


app.listen(3000, function () {

  console.log("server started on port 3000");
})