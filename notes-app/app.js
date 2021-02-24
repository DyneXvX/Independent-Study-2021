const validator = require('validator')

const getNotes = require('./note.js')



const command = process.argv[2]
console.log(process.argv)
if (command === 'add')
{
    console.log('Adding note!')
} else if (command === 'another')
{
    console.log('another command')
}