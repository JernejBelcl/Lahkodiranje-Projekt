var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var questionSchema = new Schema({
	'content' : String,
	'language' : String,
	'difficulty' : String,
	'type' : String,
	'answer' : String,
	'correct' : Boolean
});

module.exports = mongoose.model('question', questionSchema);
