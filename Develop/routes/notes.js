const notes = require("express").Router();

// Get Route for Notes Data
notes.get("/", (req, res) => {
  console.log("Notes Data Received");
});

// Post Route for Notes Data
notes.post("/"),
  (req, res) => {
    console.log("Notes Data Posted");
  };

module.exports = notes;
