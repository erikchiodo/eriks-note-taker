const notes = require("express").Router();
const uuid = require("../helpers/uuid.js");
const fs = require("fs");

// Get Route for Notes Data
notes.get("/", (req, res) => {
  try {
    const notes = JSON.parse(fs.readFileSync("db/notes.json", (encoding = "utf-8")));
    return res.json(notes);
  }
  catch {
    error.json()
  }
});

// Post request to add new note
notes.post("/", (req, res) => {
  const { title, text } = req.body;

  if (title && text) {
    const newPost = {
      title,
      text,
      id: uuid(),
    };
    const notes = JSON.parse(
      fs.readFileSync("db/notes.json", (encoding = "utf-8"))
    );
    notes.push(newPost);
    fs.writeFileSync("db/notes.json", JSON.stringify(notes));
    return res.json(newPost);
  };
});

// Delete request to delete note (by id)
notes.delete("/:id", (req, res) => {
  const notes = JSON.parse(fs.readFileSync("db/notes.json", (encoding = "utf-8")));
  const updatedNotes = notes.filter((note) => note.id != req.params.id);
  fs.writeFileSync("db/notes.json", JSON.stringify(updatedNotes));
  return res.json({ok:true});
});

module.exports = notes;