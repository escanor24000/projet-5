const express = require('express');

const app = express();
app.use(express.static('public'));
app.use(express.json());

const saucesRoutes = require('./routes/sauces');
const userRoutes = require('./routes/user');

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

app.use('/api/sauces', saucesRoutes);
app.use('/api/auth', userRoutes);


module.exports = app;