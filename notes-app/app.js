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
    notes.addNote(argv.title, argv.body);
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
      type: "string",
    },
  },
  handler: function (argv) {
    notes.removeNote(argv.title);
  },
});

//List all Notes
yargs.command({
  command: "list",
  describe: "list all the notes.",
  handler: function () {
    notes.listNotes();
  },
});

//Read all notes
yargs.command({
  command: "read",
  describe: "Reading my notes",
  builder: {
    title: {
      describe: "The notes title",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.readNote(argv.title);
  },
});

yargs.parse();
