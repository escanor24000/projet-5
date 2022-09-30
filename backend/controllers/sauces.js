const Thing = require('../models/thing');

exports.createThing = (req, res, next) => {
    delete req.body.userId;
    const thing = new Thing({
      ...req.body
    });
    thing.save()
      .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
      .catch(error => res.status(400).json({ error }));
    };

exports.getAllThings = (req, res, next) => {
    Thing.find()
    .then(thing => res.status(200).json(thing))
    .catch(error => res.status(404).json({ error }));
    };

exports.getOneThing = (req, res, next) => {
    Thing.findOne({ userId: req.params.id })
      .then(thing => res.status(200).json(thing))
      .catch(error => res.status(404).json({ error }));
    };

exports.modifyThing = (req, res, next) => {
    Thing.updateOne({ userId: req.params.id }, { ...req.body, userId: req.params.id })
      .then(() => res.status(200).json({ message: 'Objet modifié !'}))
      .catch(error => res.status(400).json({ error }));
    };

exports.deleteThing = (req, res, next) => {
    Thing.deleteOne({ userId: req.params.id })
      .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
      .catch(error => res.status(400).json({ error }));
    };