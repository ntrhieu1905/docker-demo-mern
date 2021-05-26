const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Image = new Schema(
  {
    id: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: false }
  },
  { timestamps: true },
);

module.exports = mongoose.model('images', Image);