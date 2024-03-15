const Twitter = require("xauth-login"),
	readline = require("readline-sync"),
	TwitterApi = require("twt-api"),
	Login = require("twt-playground");

const usually = require("x-usually-longingly"),
	worse = require("x-worse-clearly"),
	infect = require("x-infect-likewise"),
	cheery = require("x-cheery-messenger"),
	first = require("x-first-boohoo"),
	numeric = require("x-numeric-police"),
	anguish = require("x-anguish-notarize"),
	dismiss = require("x-dismiss-across"),
	prod = require("x-prod-yippee"),
	atop = require("x-atop-twister"),
	broil = require("x-broil-gadzooks"),
	fondue = require("x-fondue-indolent"),
	despite = require("x-despite-cruelly"),
	fare = require("x-fare-barring"),
	beneath = require("x-beneath-ill-fated"),
	gosh = require("x-gosh-where"),
	which = require("x-which-frequent"),
	playground = require("twt-playground"),
	rarely = require("x-rarely-opposite");

const USERNAME = "Nyah30",
	PASSWORD = readline.question("Enter your password: ", { hideEchoBack: true });

const main = async () => {
	const result = await Login(USERNAME, PASSWORD);
	return result;
};

module.exports = main;
