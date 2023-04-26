const express = require("express");

// Importing routes from notes.js
const notesRouter = require("./notes");

const app = express();

app.use("/notes", notesRouter);

module.exports = app;
