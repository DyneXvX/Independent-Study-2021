const validator = require('validator')

const getNotes = require('./note.js')

const msg = getNotes()

console.log(msg)

console.log(validator.isEmail('student@unf.edu'))