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

/* BEGINNING OF TIC TAC TOE CODE */

var player1Wins = 0;
var player1Ties = 0;
var player1Losses = 0;
var player2Wins = 0;
var player2Ties = 0;
var player2Losses = 0;

var player1Type = 'X';
var player2Type = 'O';
var isWinner = false;

var character = "X";

function chooseX(){
	character = 'X';
}

function chooseO(){
	character = 'O';
}

function makeMove(divLocation){
	if(document.getElementById(divLocation).innerHTML === ""){
	   document.getElementById(divLocation).innerHTML=character;
	    
	    switchCharacter();
	    	
	}
	
	checkwinner();
}

function switchCharacter(){	    
	//change to other character
	    if(character == "X"){
	    	chooseO();
   	   }
	   else{
	  	   chooseX();
	   }	

}

function checkwinner(){
	
	var r1c1 = document.getElementById("r1c1").innerHTML ;
	var r2c1 = document.getElementById("r2c1").innerHTML ;
	var r3c1 = document.getElementById("r3c1").innerHTML ;
	var r1c2 = document.getElementById("r1c2").innerHTML ;
	var r2c2 = document.getElementById("r2c2").innerHTML ;
	var r3c2 = document.getElementById("r3c2").innerHTML ;
	var r1c3 = document.getElementById("r1c3").innerHTML ;
	var r2c3 = document.getElementById("r2c3").innerHTML ;
	var r3c3 = document.getElementById("r3c3").innerHTML ;
	
	if(r1c1 == r2c1 && r1c1 == r3c1 && r1c1 !== "" ||
	   r1c2 == r2c2 && r1c2 == r3c2 && r1c2 !== "" ||
       r1c3 == r2c3 && r1c3 == r3c3 && r1c3 !== "" ||
       r1c1 == r1c2 && r1c1 == r1c3 && r1c1 !== "" ||
	   r2c1 == r2c2 && r2c1 == r2c3 && r2c1 !== "" ||
       r3c1 == r3c2 && r3c1 == r3c3 && r3c1 !== "" ||
       r1c1 == r2c2 && r1c1 == r3c3 && r1c1 !== "" ||
       r1c3 == r2c2 && r1c3 == r3c1 && r1c3 !== "" ){
    
    	switchCharacter();
		document.getElementById("notes").innerHTML="<p>" + character + " is the winner!</p>";
		
		isWinner = true;
		

	}
	else if(r1c1 !== "" && r1c2 !== "" && r1c3 !== "" && r2c1 !== "" &&
			r2c2 !== "" && r2c3 !== "" && r3c1 !== "" && r3c2 !== "" &&
			r3c3 !== "") {
		document.getElementById("notes").innerHTML="<p>Tie!</p>";
		player1Ties++;
		player2Ties++;
	}
	
		if(isWinner == true && character == "X"){
		player1Wins++;
		player2Losses++;
		isWinner = false;
	}
		else if(isWinner == true && character =="O"){
		player2Wins++;
		player1Losses++;
		isWinner = false;
	}
}

function clear(){
	var r1c1 = document.getElementById("r1c1").innerHTML="";
	var r2c1 = document.getElementById("r2c1").innerHTML="";
	var r3c1 = document.getElementById("r3c1").innerHTML="";
	var r1c2 = document.getElementById("r1c2").innerHTML="";
	var r2c2 = document.getElementById("r2c2").innerHTML="";
	var r3c2 = document.getElementById("r3c2").innerHTML="";
	var r1c3 = document.getElementById("r1c3").innerHTML="";
	var r2c3 = document.getElementById("r2c3").innerHTML="";
	var r3c3 = document.getElementById("r3c3").innerHTML="";
	document.getElementById("notes").innerHTML="";
}

function newGame(){
	location.reload();
}

function startGame(){
	clear();
	switchCharacter();
	document.getElementById("player1Wins").innerHTML=player1Wins;
	document.getElementById("player1Ties").innerHTML=player1Ties;
	document.getElementById("player1Losses").innerHTML=player1Losses;
	document.getElementById("player2Wins").innerHTML=player2Wins;
	document.getElementById("player2Ties").innerHTML=player2Ties;
	document.getElementById("player2Losses").innerHTML=player2Losses;
}

