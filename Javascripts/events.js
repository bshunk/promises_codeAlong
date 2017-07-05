"use strict";









var activateEvents = function() {
	cardWrapper.addEventListener("click", cardStyle.highlightCard);
	input.addEventListener("keyup", function() {
		console.log("Just checking");
		if (event.keyCode === 13) {
			console.log
		}
	})
}










module.exports = activateEvents;



// NODE terminology
// require('./carLotPromises')

















