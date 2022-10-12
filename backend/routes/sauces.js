const express = require('express');
const auth = require('../middleware/auth');
const router = express.Router();

const saucesCtrl = require('../controllers/sauces');

const multer = require('../middleware/multer-config');

router.post('/', auth, multer, saucesCtrl.createThing);
router.get('/', auth, saucesCtrl.getAllThings);
router.get('/:id', auth, saucesCtrl.getOneThing);
router.put('/:id', auth, saucesCtrl.modifyThing);
router.delete('/:id', auth, saucesCtrl.deleteThing);

router.post('/api/sauces/:id/like', (req, res, next) => {

});


module.exports = router;