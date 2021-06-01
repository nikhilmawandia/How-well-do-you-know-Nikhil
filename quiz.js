var readlineSync = require('readline-sync');
var userName=readlineSync.question("tell me your name:");
var score=0;
console.log("Welcome "+ userName+" lets play a game and see if you know Nikhil:: ");

function fxn(question,answer)
{
  var userAns=readlineSync.question(question);
  
  if(userAns === answer)
  {
    console.log( " right! ");
    score++;
  }
  else
  console.log( " Wrong! ");
}

var questions=[
  {
  question: "what is Nikhil's wife name ",
  answer: "shradha"
}, {
  question: "when is Nikhil's birthday? enter ans in ddmm format",
  answer: "1105"
} ,
{
  question: "when is Shradha's birthday? enter ans in ddmm format",
  answer: "0703"
},
{
  question: "when is Nikhil Shradha's anniversary? enter ans in ddmm format",
  answer: "2411"
}];
for(var i=0;i<questions.length;i++)
{
  var currentque=questions[i];
fxn(currentque.question,currentque.answer);
}
console.log( " Your score "+score);
console.log( " Send the score screenshot at 9836177447");
console.log("------");

