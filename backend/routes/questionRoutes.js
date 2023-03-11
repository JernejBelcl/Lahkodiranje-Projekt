var express = require('express');
var router = express.Router();
var questionController = require('../controllers/questionController.js');

/*
 * GET
 */
router.get('/', questionController.list);


router.get('/postQuestion', questionController.postQuestion);

/*
 * GET
 */
router.get('/:id', questionController.show);

router.get('/q/:language/:difficulty', questionController.getQuestions);
router.get('/q/:language', questionController.getAllQuestionsFromLanguage);


router.get('/:id/:answer', questionController.checkIfAnswerCorrect);


//p color:
/*
 * POST
 */
router.post('/', questionController.create);

router.post('/postQuestion', questionController.create);
/*
 * PUT
 */
router.put('/:id', questionController.update);

/*
 * DELETE
 */
router.delete('/:id', questionController.remove);

module.exports = router;
