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
