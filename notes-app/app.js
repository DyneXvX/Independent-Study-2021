const validator = require('validator')
const yargs = require('yargs')
const getNotes = require('./note.js')

//Create add command

yargs.command({
    command: 'add',
    describe: 'Add a new note.',
    handler: function(){
        console.log('Adding a new note!')
    }
})

//remove note command

yargs.command({
    command: 'remove',
    describe: 'Remove Notes',
    handler: function(){
        console.log('remove the note')
    }
})

yargs.command({
    command: 'list',
    describe: 'list all the notes.',
    handler: function(){
        console.log('listing all of my notes')
    }
})

yargs.command({
    command: 'read',
    describe: 'Reading my notes',
    handler: function(){
        console.log('Reading the note')
    }
})

console.log(yargs.argv)
