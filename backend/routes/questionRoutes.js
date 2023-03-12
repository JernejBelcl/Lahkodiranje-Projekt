var express = require('express');
var router = express.Router();
var questionController = require('../controllers/questionController.js');

/*
 * GET
 */
router.get('/', questionController.list);

/*
 routes to get c++ questions that are type short for all difficulties
 */
router.get('/cPlusPlus/Easy/Short', questionController.listCplusPlusEasyShort);
router.get('/cPlusPlus/Medium/Short', questionController.listCplusPlusMediumShort);
router.get('/cPlusPlus/Hard/Short', questionController.listCplusPlusHardShort);
/*
 routes to get c++ questions that are type choice for all difficulties
 */
router.get('/cPlusPlus/Easy/Choice', questionController.listCplusPlusEasyChoice);
router.get('/cPlusPlus/Medium/Choice', questionController.listCplusPlusMediumChoice);
router.get('/cPlusPlus/Hard/Choice', questionController.listCplusPlusHardChoice);

/*
 routes to get javascript questions that are type choice for all difficulties
 */
 router.get('/JavaScript/Easy/Choice', questionController.listJavaScriptEasyChoice);
 router.get('/JavaScript/Medium/Choice', questionController.listJavaScriptMediumChoice);
 router.get('/JavaScript/Hard/Choice', questionController.listJavaScriptHardChoice);
 
 



router.get('/postQuestion', questionController.postQuestion);

/*
 * GET
 */
router.get('/:id', questionController.show);

router.get('/sql/:difficulty/:id/answers', questionController.getAnswersByQuestionId);
router.get('/sql/:difficulty/:id/splitted', questionController.getSqlSplittedQuestionById);

router.get('/:language/:difficulty', questionController.getQuestions);
router.get('/:language', questionController.getAllQuestionsFromLanguage);


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
