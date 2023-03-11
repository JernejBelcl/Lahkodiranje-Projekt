var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var questionSchema = new Schema({
	'content' : String,
	'language' : String,
	'difficulty' : String,
	'type' : String,
	'answer' : String
});

module.exports = mongoose.model('question', questionSchema);
