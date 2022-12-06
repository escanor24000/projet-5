const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const valideEmail = require('../middleware/valide-email');
const validPassword = require('../middleware/valide-password');
const User = require('../models/user');

exports.signup = (req, res, next) => {
    if(valideEmail(req.body.email)){
       if(validPassword(req.body.password)){
        bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const user = new User({
                email: req.body.email,
                passeword: hash
            });
            user.save()
                .then(error => res.status(201).json({ message: 'Utilisateur créé !' }))
                .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
        }else{
            res.status(400).json({message: 'password incorecte' });
        }
    }else{
        res.status(400).json({message: 'email incorecte' });
    }
};

exports.login = (req, res, next) => {
    User.findOne({email: req.body.email})
    .then(user => {
        if (user === null) {
            res.status(401).json({message: 'Paire login/mot de passe incorrecte' });
        } else{
            console.log(req.body);
            console.log(user.passeword)
            bcrypt.compare(req.body.password, user.passeword)
            .then(valid => {
                if (!valid) {
                    res.status(401).json({message: 'Paire login/mot de passe incorrecte' })
                } else {
                    res.status(200).json({
                        userId: user._id,
                        token: jwt.sign(
                            { userId: user._id },
                            process.env.TOKEN,
                            { expiresIn: '24h' }
                        )
                    });
                }
            })
            .catch(error => {
                console.log(error);
               return res.status(500).json({ error })
            });
        }
    })
    .catch(error => res.status(500).json({ error }));
};