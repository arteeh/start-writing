var colorList = [
	"Aquamarine",
	"BlueViolet",
	"Brown",
	"CadetBlue",
	"Coral",
	"CornflowerBlue",
	"Cornsilk",
	"Crimson",
	"DarkCyan",
	"DarkOliveGreen",
	"FireBrick"
];

var challengeList = [
	"Write about the most exciting thing that has happened to you in the last 30 minutes."
];

// Pick a random color from the color list
var bg = colorList[Math.floor(Math.random() * colorList.length)];

// Set background color
document.getElementById("body").style.property = document.body.style.backgroundColor = bg;

function press()
{
	// Get a challenge from the challenge list
	var challenge = challengeList[Math.floor(Math.random() * challengeList.length)];
	
	// Fill the challenge with a challenge from the challenge list
	document.getElementById("challenge").innerHTML = challenge;
	
	// Reset background color
	document.getElementById("body").style.property = document.body.style.backgroundColor = bg;
}
