// Background colors in alphabetical order, following this list:
// https://www.w3schools.com/colors/colors_names.asp
var colorList = [
	"AliceBlue",
	"AntiqueWhite",
	"Aqua",
	"Aquamarine",
	"Azure",
	"Beige",
	"Bisque",
	"BlanchedAlmond",
	"BurlyWood",
	"CadetBlue",
	"CornflowerBlue",
	"Cornsilk",
	"Crimson",
	"Cyan",
	"DarkTurquoise",
	"DeepPink",
	"DeepSkyBlue",
	"DodgerBlue",
	"FloralWhite",
	"Fuchsia",
	"Gold",
	"GreenYellow",
	"HoneyDew",
	"HotPink",
	"Ivory",
	"Khaki",
	"Lavender",
	"LavenderBlush",
	"LawnGreen",
	"LemonChiffon",
	"LightBlue",
	"LightCoral",
	"LightCyan",
	"LightGoldenRodYellow",
	"LightGreen",
	"LightPink",
	"LightSeaGreen",
	"LightSkyBlue"	
];

// Try to keep sentences around equal length using <br>&nbsp
var challengeList = [
	"Write about something that made you happy this week.<br>&nbsp",
	"Write about the most exciting thing that has happened to you in the last 30 minutes.",
	"Write about the stupidest thing you've done.<br>&nbsp"
];

// Set the color at launch
setColor();

function setColor()
{
	// Pick a random color from the color list
	var bg = colorList[Math.floor(Math.random() * colorList.length)];

	// Set background color
	document.getElementById("body").style.property = document.body.style.backgroundColor = bg;
}

function setChallenge()
{
	// Get a challenge from the challenge list
	var challenge = challengeList[Math.floor(Math.random() * challengeList.length)];
	
	// Fill the challenge with a challenge from the challenge list
	document.getElementById("challenge").innerHTML = challenge;
}

// Function to call when the button gets pressed
function press()
{
	setColor();
	setChallenge();
}
