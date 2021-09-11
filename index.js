const readlineSync = require('readline-sync');
const chalk = require('chalk');
console.log(chalk.hex('#FF0088')("Let's see how well do you know about Technology  💻🖱️⌨️🖨️ \n"));

var userName = readlineSync.question(chalk.blue("Please enter your name:\n"));
console.log(chalk.hex('#6366F1')("\nHi & Welcome " + userName + "👀"));


console.log(chalk.white.bold.bgBlack("\nRemember: for each correct answer you will be given 1 point\n"));
console.log(chalk.black.bold.bgWhite("Note:please Enter a/ b/ c as answers for each question\n"));
var score = 0;



function play(ques, ans) {
  var userAns = readlineSync.question(ques);
  if (userAns.toUpperCase() === ans.toUpperCase()) {
    console.log(chalk.green.bold(userName + " Congo you are right!"));
    score++;
  }
  else {
    console.log(chalk.red.bold("You have chosen the wrong answer!"));
  }
  console.log("Your current score: ", score);
  console.log("\n----------------------\n")
}

var quiz = [{ question: "Q.) How many computer languages are in use?\nA.2000\nB.5000\nC.50\nD.20\n", answer: "A" },
{ question: "Q.) Which of these is not an early computer? \nA.ENIAC\nB.UNIVAC\nC.NASA\nD.SAGE\n", answer: "c" },
{ question: "Q.) Who Co-founded Apple Computer? \nA.Stephen Fry\nB.Bill Gates\nC.Robert Wayne\nD.Stephen Hawking\n", answer: "C" },
{ question: "Q.) Which of these is not a peripheral, in computer terms?\nA.Keyboard\nB.Mouse\nC.Monitor\nD.Motherboard\n", answer: "D" },
{ question: "Q.) Which of the following is not one of the early “protocols,” or ways to use the Internet?\nA.Blogging\nB.Telnet\nC.Gopher\nD.FTP\n", answer: "a" },
{ question: "Q.) What does the Internet prefix WWW stand for?\nA.Wide Width Wickets\nB.World Wide Web\nC.Worldwide Weather\nD.Western Washington World\n", answer: "B" },
{ question: "Q.) A network designed to allow communication within an organization is called:\nA.the World Wide Web\nB.Yahoo\nC.an intranet\nD.the internet\n", answer: "C" },
{ question: "Q.) Which of these is not a kind of computer?\nA.Lada\nB.Toshiba\nC.Lenovo\nD.Apple\n", answer: "a" },
{ question: "Q.) Which of these products is not made by the Apple Corporation?\nA.IMAX\nB.iPhone\nC.iMac\nD.iPod\n", answer: "a" },
{ question: "Q.) To which of these devices is the cellular telephone most closely related?\nA.Telegraph\nB.Radio\nC.Light Bulb\nD.Telescope\n", answer: "B" }]

for (var i = 0; i < quiz.length; i++) {
  var shuffleQuiz = shuffle(quiz);
  var currentQuestion = shuffleQuiz[i];
  play(currentQuestion.question, currentQuestion.answer);
}
var highScore = [{ name: "Yash", topScore: "10" },];

console.log(chalk.keyword('yellow').bold("YOUR FINAL SCORE IS : " + score));

console.log(chalk.keyword('orange').bold("\n***** Check out Scoreboard *****"));

printScoreBoard(highScore);

var scoreBeaten=false;
var indexInsert=0;
for(var i=0; i<highScore.length; i++){
  if(score>=highScore[i].topScore){
    scoreBeaten=true;
    indexInsert=i;
    highScore.splice(indexInsert, 0, {name:`${userName}`, topScore:`${score}`});
    break;
  }
}

console.log('---------------------------------')

if(scoreBeaten){
  console.log(chalk.white.bold.bgBlack("Congratulations "+userName+" , you have beaten the SCORE-BOARD. You are the ULTIMATE TECH-GEEK 👨‍💻"));

  console.log(chalk.keyword('pink').bold("\n***** U P D A T E D    S C O R E B O A R D *****"));
  printScoreBoard(highScore);
  console.log("\nSend me the screenshot of your final score so that I can update the actual scoreboard \n\n\n\n");
}

else{
  console.log(chalk.bold.hex('#BBBBB')("You are doing Good "+userName+", But unfortunately you were not able to beat the HIGH SCORE to become the ULTIMATE TECH-GEEK "));
}

function printScoreBoard(highScore){
  for(let i=0; i<highScore.length; i++){
    console.log(chalk.magentaBright.bold(highScore[i].name+" : " +highScore[i].topScore));
  }
}

// Created a Shuffle function to shuffle the order of the questions each time you play the quiz.

function shuffle(array) {
  var currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}
