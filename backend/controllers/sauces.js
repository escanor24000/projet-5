const { updateOne } = require('../models/thing');
const Thing = require('../models/thing');
const validNote = require('../middleware/valide-note')

exports.createThing = (req, res, next) => {
  const obj = JSON.parse(req.body.sauce);
  if(validNote(obj.heat)){
  //console.log(obj);
    Thing.find({"name":obj.name});
    const thing = new Thing({
      ...obj,
      imageUrl : "http://localhost:3000/images/"+req.file.filename,
    });
    console.log(thing);

    thing.save()
      .then(() => res.status(201).json({ message: 'Objet enregistré !'}))

      .catch(error => {
        console.log(error);
        return res.status(400).json({ error })
      });
    }else{
      res.status(321).json({message: 'note incorrect' });
    }
    };

exports.getAllThings = (req, res, next) => {
    Thing.find()
    .then(thing => res.status(200).json(thing))
    .catch(error => res.status(404).json({ error }));
    };

exports.getOneThing = (req, res, next) => {
    Thing.findOne({ _id: req.params.id })
      .then(thing => res.status(200).json(thing))
      
      .catch(error => res.status(404).json({ error }));
    };

exports.modifyThing = (req, res, next) => {
  console.log(req);
    Thing.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Objet modifié !'}))
      .catch(error => res.status(400).json({ error }));
      
    };

exports.deleteThing = (req, res, next) => {
  console.log(req.params.id);
    Thing.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
      .catch(error => res.status(400).json({ error }));
    };

