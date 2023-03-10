var express = require('express');
var router = express.Router();
var answerController = require('../controllers/answerController.js');

/*
 * GET
 */
router.get('/', answerController.list);
router.get('/sql/lahki', answerController.list);
/*
 * GET
 */
//router.get('/:id', answerController.show);
router.get('/sql/:id', answerController.listSql);
router.get('/sql/correct/:id', answerController.showSqlCorrect);
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
