// Creating a BasicCard constructor which takes front and back as the arguments

var BasicCard = function(front, back){
	this.front = front;
	this.back = back;
};

BasicCard.prototype.displayFront = function(){
		console.log("=============");
		console.log("The Basic Card Question");
		console.log(this.front);
};

BasicCard.prototype.displayBack = function(){
		console.log("=============");
		console.log("The Basic Card Answer");
		console.log(this.back);
};

module.exports = BasicCard;
