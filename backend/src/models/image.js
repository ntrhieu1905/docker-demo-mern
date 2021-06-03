const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ImageModel = new Schema(
  {
    id: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: false }
  },
  { timestamps: true },
);

module.exports = mongoose.model('images', ImageModel);