
var operand1;
var operand2;

function getNumbers(){
 operand1 = Math.floor(Math.random() * 20) + 1;
 operand2 = Math.floor(Math.random() * 20) + 1;
 document.getElementById("operand1").innerHTML=operand1;
 document.getElementById("operand2").innerHTML=operand2;
 document.getElementById("userAnswer").value="";
}

function checkAnswer(){
  var userAnswer = document.getElementById("userAnswer").value;
  var sum = operand1 + operand2;
  
  if(userAnswer == sum){
    document.getElementById("results").innerHTML="Correct!";
  }
  else{
    document.getElementById("results").innerHTML="Incorrect!";
  }
}

var pics = [
              "http://www.pupsor.com/wp-content/uploads/2016/03/names-for-white-puppies.jpg",
              "https://pbs.twimg.com/profile_images/446566229210181632/2IeTff-V.jpeg",
              "http://images.r.cruisecritic.com/news/2016/princess-puppies.jpg"
           ];

var picIndex = 0;

function goLeft(){
  if(picIndex > 0){
    picIndex = picIndex - 1;
    document.getElementById("pic").src=pics[picIndex];
  }
}

function goRight(){
  if(picIndex < (pics.length -1)){
    picIndex = picIndex +1;
    document.getElementById("pic").src=pics[picIndex];
  }
}

var character = "";

function chooseX(){
	character = 'X';
}

function chooseO(){
	character = 'O';
}

function makeMove(divLocation){
	document.getElementById(divLocation).innerHTML=character;
}
