const validator = require('validator');

const getNotes = require('./notes');

const message = getNotes();

console.log(message);


console.log(validator.isEmail('dharmendra.rex@gmail'));