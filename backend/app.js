const express = require('express');

const app = express();

app.use(express.json());

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://escanor:FFiFldoyFAbJCTgJ@cluster0.9smlcxc.mongodb.net/test',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.post('/api/auth/signup', (req, res, next) => {

});
app.delete

app.get('/api/sauces', (req, res, next) => {
    res.json({ message: 'Votre requête a bien été reçue !' });
 });

app.get('/api/sauces/:id', (req, res, next) => {
    res.json({ message: 'Votre requête id a bien été reçue !' });
});

module.exports = app;