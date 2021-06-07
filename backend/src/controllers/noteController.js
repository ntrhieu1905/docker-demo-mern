const { Note } = require('../models');

const getNote = async (req, res) => {
  const notes = await Note.find();
  return res.json(notes);
}

const getNoteById = async (req, res) => {
  const note = await Note.findById(req.params.id);
  return res.json(note);
}

const addNote = async (req, res) => {
  const saveNote = await Note.create(req.body);
  return res.json(saveNote);
}

module.exports = {
  getNote,
  getNoteById,
  addNote
}