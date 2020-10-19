// List of background colors in alphabetical order, following this list:
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

// Array of challenges to choose from
var challengeList = [
	"Write about something that made you happy this week.",
	"Write about the most exciting thing that has happened to you in the last hour.",
	"Write about the stupidest thing you've done.",
	"Write about what you think your life will look like in 5 years.",
	"Write about a film or book that has stayed with you.",
	"Write a letter to your 10-year-old self.",
	"Write a letter to your future self.",
	"Write about a memorable interaction with a stranger.",
	"Write about what you'd do if money wasn't an issue.",
	"Write about something you loved to do when you were a child.", //10
	"Write about your responsibilities and how you feel about them.",
	"Write about what keeps you going every day.",
	"Write a thank you letter to yourself for the things you do.",
	"Write about your ideal home.",
	"Write about that one thing you want to do the most right now.",
	"Look around you and pick an object. Write about why it's there.",
	"Write down why you think your friends like you.",
	"Who is your hero? Write down something about them that you admire.",
	"Your TED Talk is tomorrow. Write down what you'll talk about and why.",
	"Are you upset at someone? Write down why.", //20
	"Who do you feel sorry for? Write down why.",
	"Write about what in your life scares you the most.",
	"Write."
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
