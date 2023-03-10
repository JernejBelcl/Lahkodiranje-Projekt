var express = require('express');
const app = express()

/** 
var router = express.Router();
var questionController = require('../controllers/questionController.js');


//GET
router.get('/', questionController.list);
router.get('/html', questionController.listHtml);
router.get('/css', questionController.listCss);


//GET

router.get('/:id', questionController.show);

//POST
router.post('/', questionController.create);

//PUT
router.put('/:id', questionController.update);

//DELETE
router.delete('/:id', questionController.remove);

module.exports = router;
*/


var questionController = require('../controllers/questionController.js');
app.get('/api/data', (req, res) => {
  const data = { message: 'Hello from Express!' }
  res.json(data)
})

app.listen(3000, () => {
  console.log('Server listening on port 3000')
})