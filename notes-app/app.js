const yargs = require("yargs");
const notes = require("./note.js");

//Create add command

yargs.command({
  command: "add",
  describe: "Add a new note.",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "This is the notes body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body)
  },
});

//remove note command
yargs.command({
  command: "remove",
  describe: "Remove Notes",
  builder: {
      title: {
          describe: "Note Title",
          demandOption: true,
          type: "string"
      },
  },
  handler: function (argv) {
    notes.removeNote(argv.title)
  },
});

yargs.command({
  command: "list",
  describe: "list all the notes.",
  handler: function () {
    notes.listNotes()
  },
});

yargs.command({
  command: "read",
  describe: "Reading my notes",
  handler: function () {
    console.log("Reading the note");
  },
});

yargs.parse();
//console.log(yargs.argv)
