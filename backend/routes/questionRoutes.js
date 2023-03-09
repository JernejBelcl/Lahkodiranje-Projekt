var express = require('express');
var router = express.Router();
var questionController = require('../controllers/questionController.js');

/*
 * GET
 */
router.get('/', questionController.list);
router.get('/cPlusPlus/Easy/Short', questionController.listCplusPlusEasyShort);
router.get('/cPlusPlus/Medium/Short', questionController.listCplusPlusMediumShort);
router.get('/cPlusPlus/Hard/Short', questionController.listCplusPlusHardShort);

router.get('/cPlusPlus/Easy/Choice', questionController.listCplusPlusEasyChoice);
router.get('/cPlusPlus/Medium/Choice', questionController.listCplusPlusMediumChoice);
router.get('/cPlusPlus/Hard/Choice', questionController.listCplusPlusHardChoice);
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
