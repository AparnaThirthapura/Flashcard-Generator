var BasicCard = require("./BasicCard");
var ClozeCard = require("./ClozeCard");

var inquirer = require("inquirer");

inquirer.prompt([
	{
		type:"list",
		name:"cardType",
		message:"Choose a Card Type?",
		choices:["BasicCard", "ClozeCard"]
	}
]).then(function(cardType){
	console.log(cardType);
	if(cardType.cardType === "BasicCard"){
		callBasicCard();
	}
	else{
		callClozeCard();
	}
});

function callBasicCard(){
	console.log("-----------------------------");
	console.log("Enter the Basic Card Information");
	console.log("-----------------------------");

	inquirer.prompt([
			{
				type:"input",
				name:"front",
				message:"What is the Question?"
			},
			{
				type:"input",
				name:"back",
				message:"What is the Answer"
			}
		]).then(function(cardInfo){
			var BC1 = new BasicCard(cardInfo.front, cardInfo.back);
			BC1.displayFront();
			BC1.displayBack();

		});
	

}

function callClozeCard(){
	console.log("-----------------------------");
	console.log("Enter the Cloze Card Information");
	console.log("-----------------------------");

	inquirer.prompt([
			{
				type:"input",
				name:"text",
				message:"What is the complete sentence?"
			},
			{
				type:"input",
				name:"cloze",
				message:"What is the Cloze text?"
			}
		]).then(function(cardInfo){
			var CC1 = new ClozeCard(cardInfo.text, cardInfo.cloze);

			if(CC1.cloze !== undefined){
				CC1.displayFull();
				CC1.displayCloze();
				CC1.displayPartial();
			}
		});
	
}