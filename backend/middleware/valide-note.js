const express = require ('express');

function validNote(heat){
    if(parseInt(heat) >= 0 || parseInt(heat) <= 10){
    return true;

    }else{
        
    return false;
}
};

module.exports = validNote;