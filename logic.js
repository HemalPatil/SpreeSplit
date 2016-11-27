const aspectRatio = 16 / 9;

var blueDiv;
var blueImage;
var orangeDiv;
var orangeImage;

function handleMouseMove(e)
{
	orangeDiv.style.width = e.pageX + "px";
}

function resizeImages()
{
	if(blueDiv.clientWidth/blueDiv.clientHeight > aspectRatio)
	{
		orangeImage.style.width = blueDiv.clientWidth + "px";
		orangeImage.style.left = "0";
		orangeImage.style.transform = "translateY(-50%)";
	}
	else
	{
		orangeImage.style.width = "auto";
		orangeImage.style.transform = "none";
		orangeImage.style.left = (blueDiv.clientWidth - blueImage.clientWidth)/2 + "px";
	}
}

function initialize(e)
{
	blueDiv = document.getElementById("bluediv");
	blueImage = document.getElementById("blueimg");
	orangeDiv = document.getElementById("orangediv");
	orangeImage = document.getElementById("orangeimg");
	document.getElementById("container").onmousemove = handleMouseMove;
	resizeImages();
}

window.addEventListener("load", initialize);
window.addEventListener("resize", function(e){resizeImages();});