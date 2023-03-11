var express = require('express');
var router = express.Router();
var answerController = require('../controllers/answerController.js');

/*
 * GET
 */
router.get('/', answerController.list);
router.get('/cPlusPlus/lahki', answerController.list);
/*
 * GET
 */
//route to get all answers for specific question
router.get('/cPlusPlus/:id', answerController.listCplusPlus);
//route to get all correct answers for specific question
router.get('/cPlusPlus/correct/:id', answerController.showCplusPlusCorrect);
/*
 * POST
 */
router.post('/', answerController.create);

/*
 * PUT
 */
router.put('/:id', answerController.update);

/*
 * DELETE
 */
router.delete('/:id', answerController.remove);

module.exports = router;
