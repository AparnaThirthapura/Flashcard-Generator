// Creating a ClozeCard constructor which takes text and cloze arguments
// ClozeCard should have a property or method that contains or returns only the cloze-deleted portion of the text.
// ClozeCard should have a property or method that contains or returns only the partial text.
// ClozeCard should have a property or method that contains or returns only the full text.
// ClozeCard should throw or log an error when the cloze deletion does not appear in the input text.
// Use prototypes to attach these methods, wherever possible.

var ClozeCard = function(text, cloze){
	if(!text.includes(cloze)) {
		console.log("=============");
		console.log("The cloze text is not in the sentence!!!!");
		return null;
	}
 
	this.text = text;
	this.cloze = cloze;


	var full = this.text;
	var textToRem = this.cloze;

	this.partial = full.replace(textToRem, "......");

};

ClozeCard.prototype.displayCloze = function(){
	console.log("=============");
	console.log("The Deleted portion of the sentence is:");
	console.log(this.cloze);
};

ClozeCard.prototype.displayFull = function(){
	console.log("=============");
	console.log("The Full Sentence is:");
	console.log(this.text);
};

ClozeCard.prototype.displayPartial = function(){
	console.log("=============");
	console.log("The Partial Sentence is:");
	console.log(this.partial);

};

module.exports = ClozeCard;