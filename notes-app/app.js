const validator = require('validator')
const yargs = require('yargs')
const getNotes = require('./note.js')

//Create add command

yargs.command({
    command: 'add',
    describe: 'Add a new note.',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'This is the notes body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        console.log('Title: ' + argv.title)
        console.log('Body is: ', argv.body)
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

yargs.parse()
//console.log(yargs.argv)
