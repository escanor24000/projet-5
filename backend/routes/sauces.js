const express = require('express');
const router = express.Router();

const saucesCtrl = require('../controllers/sauces');

router.post('/', saucesCtrl.createThing);
router.get('/', saucesCtrl.getAllThings);
router.get('/:id', saucesCtrl.getOneThing);
router.put('/:id', saucesCtrl.modifyThing);
router.delete('/:id', saucesCtrl.deleteThing);

router.post('/api/sauces/:id/like', (req, res, next) => {

});


module.exports = router;