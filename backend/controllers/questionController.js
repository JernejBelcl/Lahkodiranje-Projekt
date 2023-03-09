var questionModel = require('../models/questionModel.js');


module.exports = {

 
    list: function (req, res) {
        questionModel.find(function (err, questions) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting question.',
                    error: err
                });
            }

            return res.json(questions);
        });
    },

    listCplusPlusEasyShort: function (req, res) {
        var diff="Easy";
        var lang="C++";
        var types="Short";
        questionModel.find({difficulty: diff,language:lang,type:types},function (err, questions) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting question.',
                    error: err
                });
            }

            return res.json(questions);
        });
    },
    listCplusPlusMediumShort: function (req, res) {
        var diff="Medium";
        var lang="C++";
        var types="Short";
        questionModel.find({difficulty: diff,language:lang,type:types},function (err, questions) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting question.',
                    error: err
                });
            }

            return res.json(questions);
        });
    },
    listCplusPlusHardShort: function (req, res) {
        var diff="Hard";
        var lang="C++";
        var types="Short";
        questionModel.find({difficulty: diff,language:lang,type:types},function (err, questions) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting question.',
                    error: err
                });
            }

            return res.json(questions);
        });
    },
 
    listCplusPlusEasyChoice: function (req, res) {
        var diff="Easy";
        var lang="C++";
        var types="Choice";
        questionModel.find({difficulty: diff,language:lang,type:types},function (err, questions) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting question.',
                    error: err
                });
            }

            return res.json(questions);
        });
    },
    listCplusPlusMediumChoice: function (req, res) {
        var diff="Medium";
        var lang="C++";
        var types="Choice";
        questionModel.find({difficulty: diff,language:lang,type:types},function (err, questions) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting question.',
                    error: err
                });
            }

            return res.json(questions);
        });
    },
    listCplusPlusHardChoice: function (req, res) {
        var diff="Hard";
        var lang="C++";
        var types="Choice";
        questionModel.find({difficulty: diff,language:lang,type:types},function (err, questions) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting question.',
                    error: err
                });
            }

            return res.json(questions);
        });
    },

    show: function (req, res) {
        var id = req.params.id;

        questionModel.findOne({_id: id}, function (err, question) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting question.',
                    error: err
                });
            }

            if (!question) {
                return res.status(404).json({
                    message: 'No such question'
                });
            }

            return res.json(question);
        });
    },

 
    create: function (req, res) {
        var question = new questionModel({
			title : req.body.title,
			content : req.body.content
        });

        question.save(function (err, question) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating question',
                    error: err
                });
            }

            return res.status(201).json(question);
        });
    },

   
    update: function (req, res) {
        var id = req.params.id;

        questionModel.findOne({_id: id}, function (err, question) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting question',
                    error: err
                });
            }

            if (!question) {
                return res.status(404).json({
                    message: 'No such question'
                });
            }

            question.title = req.body.title ? req.body.title : question.title;
			question.content = req.body.content ? req.body.content : question.content;
			
            question.save(function (err, question) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating question.',
                        error: err
                    });
                }

                return res.json(question);
            });
        });
    },

  
    remove: function (req, res) {
        var id = req.params.id;

        questionModel.findByIdAndRemove(id, function (err, question) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the question.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
