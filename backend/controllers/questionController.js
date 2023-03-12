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

    getSqlSplittedQuestionById: function (req, res) {
        var id = req.params.id;
        var diff = req.params.difficulty;
        var lang="sql";

        questionModel.find({difficulty: diff,language:lang},function (err, questions) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting question.',
                    error: err
                });
            }

            if (questions.length == 0) {
                return res.status(404).json({
                    message: 'No such questions, check params'
                });
            }

            if (parseInt(id) > questions.length - 1 || parseInt(id) < 0) {
                return res.status(404).json({
                    message: 'id out of range'
                });
            }

            return res.json(questions[parseInt(id)].content.split('_'));
        });
    },

    //za sql
    getAnswersByQuestionId: function (req, res) {
        var id = req.params.id;
        var diff = req.params.difficulty;
        var lang="sql";

        questionModel.find({difficulty: diff,language:lang},function (err, questions) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting question.',
                    error: err
                });
            }

            if (questions.length == 0) {
                return res.status(404).json({
                    message: 'No such questions, check params'
                });
            }

            if (parseInt(id) > questions.length - 1 || parseInt(id) < 0) {
                return res.status(404).json({
                    message: 'id out of range'
                });
            }

            return res.json(questions[parseInt(id)].answer.split(';'));
        });
    },


//function that returns list of questions with filters for easy difficulty, c++ language and short type
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
    //function that returns list of questions with filters for medium difficulty, c++ language and short type
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
    //function that returns list of questions with filters for hard difficulty, c++ language and short type
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
 //function that returns list of questions with filters for easy difficulty, c++ language and choice type
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
    //function that returns list of questions with filters for medium difficulty, c++ language and choice type
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
    //function that returns list of questions with filters for hard difficulty, c++ language and choice type
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
    listJavaScriptEasyChoice: async (req, res) => {
        try {
            const questions = await questionModel.find({difficulty: 'easy',language: 'js', type: 'fill'})
            res.status(200).json(questions)
        } catch(err){
            res.status(500).json({message: 'Error when getting question.', error: err.message})
        }
    },
    listJavaScriptMediumChoice: async (req, res) => {
        try {
            const questions = await questionModel.find({difficulty: 'medium',language: 'js', type: 'fill'})
            res.status(200).json(questions)
        } catch(err){
            res.status(500).json({message: 'Error when getting question.', error: err.message})
        }
    },
    listJavaScriptHardChoice: async (req, res) => {
        try {
            const questions = await questionModel.find({difficulty: 'hard',language: 'js', type: 'fill'})
            res.status(200).json(questions)
        } catch(err){
            res.status(500).json({message: 'Error when getting question.', error: err.message})
        }
    },
    listPythonEasyChoice: async (req, res) => {
        try {
            const questions = await questionModel.find({difficulty: 'easy',language: 'python', type: 'fill'})
            res.status(200).json(questions)
        } catch(err){
            res.status(500).json({message: 'Error when getting question.', error: err.message})
        }
    },
    listPythonMediumChoice: async (req, res) => {
        try {
            const questions = await questionModel.find({difficulty: 'medium',language: 'python', type: 'fill'})
            res.status(200).json(questions)
        } catch(err){
            res.status(500).json({message: 'Error when getting question.', error: err.message})
        }
    },
    listPythonHardChoice: async (req, res) => {
        try {
            const questions = await questionModel.find({difficulty: 'hard',language: 'python', type: 'fill'})
            res.status(200).json(questions)
        } catch(err){
            res.status(500).json({message: 'Error when getting question.', error: err.message})
        }
    },

    postQuestion: function (req, res) {
    res.render('inputQuestion', { title: 'Vnos vprasanja' });
    },

    show: function (req, res) {
        var id = req.params.id;
        console.log(req.params);
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


    getQuestions: function (req, res) {
        var lang = req.params.language;
        var diff = req.params.difficulty;
        console.log(req.body.difficulty);
        questionModel.find({difficulty: diff, language:lang}, function (err, question) {
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


    checkIfAnswerCorrect: function (req, res) {
        //var lang = req.params.language;
        var id = req.params.id;
        var answer = req.params.answer;
        questionModel.find({id: id, answer: answer}, function (err, question) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting question.',
                    error: err
                });
            }

            console.log(question);
            
            if (!question || question.length == 0) {
                return res.json("False");
            }

            return res.json("True");
        });
    },

    getAllQuestionsFromLanguage: function (req, res) {
        var lang = req.params.language;
        questionModel.find({ language:lang}, function (err, question) {
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
			content : req.body.content,
            answer : req.body.answer,
            language : req.body.language,
            difficulty: req.body.difficulty
        });

        question.save(function (err, question) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating question',
                    error: err
                });
            }
            console.log(req.body);
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
