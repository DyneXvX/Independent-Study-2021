const fs = require("fs");

//add new notes
const addNote = function (title, body) {
  const notes = loadNotes();

  const duplicateNotes = notes.filter(function (note) {
    return note.title === title;
  });

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log("New note was added.");
  } else {
    console.log("This note title is already here.");
  }
};

//delete a note
const removeNote = function (title) {
  const notes = loadNotes();

  const notesToKeep = notes.filter(function (note) {
    return note.title !== title;
  });

  if (notes.length > notesToKeep.length) {
    console.log("The note " + title + " was deleted.");
    saveNotes(notesToKeep);
  } else {
    console.log("No note was deleted.");
  }
};

//list the notes
const listNotes = function () {
  const notes = loadNotes();

  console.log("------Your Notes-------");

  notes.forEach((note) => {
    console.log(note.title);
  });
};

//read the notes
const readNote = function (title) {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);

  if (note) {
    console.log(note.title);
    console.log(note.body);
  } else {
    console.log("The note was not found.");
  }
};

//save notes in the JSON
const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

//load the notes for editing
const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

//node exports
module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote,
};
