var database = [
	{
		username: "kate",
		password: "superstar"
	},
	{
		username: "sally",
		password: "123"
	},
	{
		username: "ingrid",
		password: "777"
	},
];

var newsFeed = [
	{
		username: "Bobby",
		timeline: "So tired from all that learning"
	},
	{
		username: "Sally",
		timeline: "Javascript is so cool!"
	},
	{
		username: "Michal",
		timeline: "Javascript is awesome!"
	},
];

function isUserValid(username,password) {
	for (var i=0; i< database.length;i++) {
		if(database[i].username === username &&
			database[i].password === password) {
			return true;
			}
		}
		return false;
	}
/*function signIn(username, password) {

	for (var i=0; i< database.length;i++) {
		if(database[i].username === username &&
			database[i].password === password) {
			console.log(newsFeed);
		}else {
			alert("Sorry, wrong username or passwored");
		}
	}
}*/

function signIn (username, password) {
	if (isUserValid(username, password)) {
		console.log(newsFeed)
	} else {
		alert("Sorry, wrong username and password!");
	}
}

var userNamePrompt = prompt ("What's your user name?");
var passwordPrompt = prompt ("What's your password?");

signIn(userNamePrompt, passwordPrompt);

