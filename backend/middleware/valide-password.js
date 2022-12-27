const express = require('express');

function validPassword(password) {
    //Au moins 3 caractéres
    if (password.lenght < 3)
        return false;

    //Au moins 1 maj
    if (!/[A-Z]/.test(password))
        return false;

    //Au moins 1 minuscule
    if (!/[a-z]/.test(password))
        return false;

    //Au moins 1 chiffre
    if (!/[0-9]/.test(password))
        return false;

    return true;
}

module.exports = validPassword;