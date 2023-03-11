var answerModel = require('../models/answerModel.js');


module.exports = {

 
    list: function (req, res) {
        answerModel.find(function (err, answers) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting answer.',
                    error: err
                });
            }

            return res.json(answers);
        });
    },

    listCplusPlus: function (req, res) {
        var id = req.params.id;
        answerModel.find({questionID: id},function (err, answers) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting answer.',
                    error: err
                });
            }
            if (!answers) {
                return res.status(404).json({
                    message: 'No such answer'
                });
            }
            return res.json(answers);
        });
    },

    showCplusPlusCorrect: function (req, res) {
        var id = req.params.id;
        var tempCorrect = true;
        answerModel.findOne({questionID: id,correct: tempCorrect}, function (err, answer) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting answer.',
                    error: err
                });
            }

            if (!answer) {
                return res.status(404).json({
                    message: 'No such answer'
                });
            }

            return res.json(answer);
        });
    },


    show: function (req, res) {
        var id = req.params.id;

        answerModel.findOne({_id: id}, function (err, answer) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting answer.',
                    error: err
                });
            }

            if (!answer) {
                return res.status(404).json({
                    message: 'No such answer'
                });
            }

            return res.json(answer);
        });
    },

 
    create: function (req, res) {
        var answer = new answerModel({
			title : req.body.title,
			content : req.body.content
        });

        answer.save(function (err, answer) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating answer',
                    error: err
                });
            }

            return res.status(201).json(answer);
        });
    },

   
    update: function (req, res) {
        var id = req.params.id;

        answerModel.findOne({_id: id}, function (err, answer) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting answer',
                    error: err
                });
            }

            if (!answer) {
                return res.status(404).json({
                    message: 'No such answer'
                });
            }

            answer.title = req.body.title ? req.body.title : answer.title;
			answer.content = req.body.content ? req.body.content : answer.content;
			
            answer.save(function (err, answer) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating answer.',
                        error: err
                    });
                }

                return res.json(answer);
            });
        });
    },

  
    remove: function (req, res) {
        var id = req.params.id;

        answerModel.findByIdAndRemove(id, function (err, answer) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the answer.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
