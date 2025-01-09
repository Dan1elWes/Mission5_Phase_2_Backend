const mongoose = require('mongoose');

const stationSchema = new mongoose.Schema({
  id: Number,
  name: String,
  lat: Number,
  lng: Number,
  prices: {
    'ZX premium': Number,
    'Z91 unleaded': Number,
    'Z diesel': Number,
    'EV charging': Number
  },
  services: String,
  types: [String],
  stationTypes: [String],
  street: String,
  locality: String,
  country: String
});

module.exports = mongoose.model('Station', stationSchema);
