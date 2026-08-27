const mongoose = require('mongoose');

const FavoritoSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  status: { type: String },
  species: { type: String },
  image: { type: String }
});

module.exports = mongoose.model('Favorito', FavoritoSchema);
