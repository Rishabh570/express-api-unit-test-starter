const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  rating: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  hash: {
    type: String,
    required: true,
    unique: true,
    minlength: 10,
    maxlength: 10,
  }
});

module.exports = mongoose.model('Item', itemSchema);