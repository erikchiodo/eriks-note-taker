const express = require("express");

// Importing route from notes.js
const notesRouter = require("./notes");

const app = express();

app.use("/notes", notesRouter);

module.exports = app;
