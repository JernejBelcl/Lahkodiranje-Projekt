var express = require('express');
var router = express.Router();
var questionController = require('../controllers/questionController.js');

/*
 * GET
 */
router.get('/', questionController.list);
router.get('/sql/Easy/Short', questionController.listSqlEasyShort);
router.get('/sql/Medium/Short', questionController.listSqlMediumShort);
router.get('/sql/Hard/Short', questionController.listSqlHardShort);

router.get('/sql/Easy/Choice', questionController.listSqlEasyChoice);
router.get('/sql/Medium/Choice', questionController.listSqlMediumChoice);
router.get('/sql/Hard/Choice', questionController.listSqlHardChoice);
/*
 * GET
 */
router.get('/:id', questionController.show);

/*
 * POST
 */
router.post('/', questionController.create);

/*
 * PUT
 */
router.put('/:id', questionController.update);

/*
 * DELETE
 */
router.delete('/:id', questionController.remove);

module.exports = router;
