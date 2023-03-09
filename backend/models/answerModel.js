var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var answerSchema  = new Schema({
	'questionID' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'question'
	},
	'content' : String,
	'correct' : Boolean,
});

module.exports = mongoose.model('answer', answerSchema);
