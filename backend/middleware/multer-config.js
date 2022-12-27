const multer = require('multer');

MIME_TYPES = ['image/jpeg', 'image/jpg', 'image/png']

function fileFilter(req, file, cb) {
  console.log(file.mimetype);
  if (MIME_TYPES.indexOf(file.mimetype) !== -1) {
    cb(null, true)
  } else {
    cb(new Error('le fichier n\'est pas reconnue'))
  }

};


const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'public/images');
  },
  filename: (req, file, callback) => {
    console.log(file);
    const name = file.originalname.split(' ').join('_');
    const extension = MIME_TYPES[file.mimetype];
    callback(null, name + Date.now() + '.' + extension);
  }
});

module.exports = multer({ fileFilter: fileFilter, storage: storage }).single('image');