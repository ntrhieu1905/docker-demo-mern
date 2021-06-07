const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NoteModel = new Schema(
  {
    id: { type: String, required: false },
    title: { type: String, required: true },
    content: { type: String, required: false },
  },
  { timestamps: true },
);

module.exports = mongoose.model('notes', NoteModel);