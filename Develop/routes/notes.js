const notes = require("express").Router();
const uuid = require("../helpers/uuid.js");
const fs = require("fs");
const noteData = require("/db/notes.json");

// Get Route for Notes Data
notes.get("/", (req, res) => {
// TODO: pull information from note.json file
// TODO: serialize data from notes.json
// TODO: present information on html
  try {
    console.log(notesData);
    return res.json(noteData);
  }
  catch {
    error.json()
  }
});

// Post Route for Notes Data
notes.post("/", (req, res) => {
  // TODO: Collect inputs from HTML request
  const { title, text, notesId } = req.body;

  if (title && text && notesId) {
    const newPost = {
      title,
      text,
      notesId: uuid(),
    };

    // TODO: Stringify (deserialize) inputs to be written to notes.json
    const request = {
      method: "POST",
      header: { "Content-Type": "application/json" },
      body: JSON.stringify(newPost),
    };

    // TODO: Write notes to notes.json
    fs.writeFile("/db/notes.json", request, { flag: "a" }, (err) => {
      if (err) throw err;
      console.log("New note added to notes.json");
    });
  };
});

module.exports = notes;
