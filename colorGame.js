var numSquares=6;
var colors=generateRandomColors(numSquares);


var hardBtn=document.querySelector("#hardBtn");
var easyBtn=document.querySelector("#easyBtn");
var resetButton=document.querySelector("#reset"); 
var h1=document.querySelector("h1");
var squares=document.querySelectorAll(".square");
var pickedColor=pickColor();
var colorDisplay=document.getElementById("colorDisplay");
var messageDisplay=document.querySelector("#message");
colorDisplay.textContent= pickedColor;

easyBtn.addEventListener("click",function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numSquares=3;
	colors=generateRandomColors(numSquares);								//generate new colors
	pickedColor=pickColor();									//pick a random new color from color array
	colorDisplay.textContent= pickedColor;						//change colorDisplay to match the picked color
	for(var i=0; i<squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor=colors[i];			//giving random colors only to first 3 squares
		}
		 else{
		 	squares[i].style.display="none";					// Hiding the rest of 3 squares
		 }
	}



});

hardBtn.addEventListener("click",function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numSquares=6;
	colors=generateRandomColors(numSquares);								//generate new colors
	pickedColor=pickColor();									//pick a random new color from color array
	colorDisplay.textContent= pickedColor;						//change colorDisplay to match the picked color
	for(var i=0; i<squares.length; i++){
	
		squares[i].style.backgroundColor=colors[i];				 //giving new colos to each of 6 squares
	
		 
		 squares[i].style.display="block";						// Making 3 squares appeared hided in easy mode of game 
		 
	}
});

resetButton.addEventListener("click",function(){
	colors=generateRandomColors(numSquares);					//generate new colors 
	pickedColor=pickColor();									//pick a new random color from the array
	colorDisplay.textContent=pickedColor;						//change colorDisplay to match picked color
	messageDisplay.textContent="";

	//change colors of each squares

	for(i=0; i<squares.length; i++){
		squares[i].style.backgroundColor=colors[i];
	}
	h1.style.backgroundColor= steelblue;

});

for(var i=0; i<squares.length; i++){

	//add initial colors to squares

	squares[i].style.backgroundColor=colors[i];

	//add  click listeners to squares

	squares[i].addEventListener("click", function(){

		//grab the colors of each square

		var clickedColor=this.style.backgroundColor;

		//compare clickedColor with the pickedColor 
		 
		if(clickedColor===pickedColor){
			h1.style.backgroundColor= clickedColor;
			messageDisplay.textContent= "Correct!";
			resetButton.textContent= "Play Again?";
			changeColors(clickedColor);
			 
		}
		else{
			this.style.backgroundColor= "#232323";
			messageDisplay.textContent= "Try Again";
		}
	});
}
function changeColors(color){
	//loop through all squares

	for(var i=0; i<squares.length; i++){
	squares[i].style.backgroundColor= color;

	//then change each color to match given color


	}
	 
}

function pickColor(){
	var random=	Math.floor(Math.random()* colors.length);
		return colors[random];
}

function generateRandomColors(num){

	//make an array

	var arr=[];

	//Repeat num times

	for(var i=0; i<num; i++){

		arr.push(randomColors());	//get random colors push into arary


	}
	return arr;
}

function randomColors(){
	var r= Math.floor(Math.random()*256);	//pick a "red" from 0-255
	var g= Math.floor(Math.random()*256);	//pick a "green" from 0-255
	var b= Math.floor(Math.random()*256);	//pick a "blue" from 0-255

	return "rgb(" + r + ", " + g + ", " + b + ")";
}