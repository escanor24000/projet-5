const express = require('express');
const auth = require('../middleware/auth');
const router = express.Router();

const saucesCtrl = require('../controllers/sauces');

const multer = require('../middleware/multer-config');

router.post('/', auth, multer, saucesCtrl.createThing);
router.get('/', auth, saucesCtrl.getAllThings);
router.get('/:id', auth, saucesCtrl.getOneThing);
router.put('/:id', auth, multer, saucesCtrl.modifyThing);
router.delete('/:id', auth, saucesCtrl.deleteThing);
router.post('/:id/like', auth, saucesCtrl.like);

module.exports = router;