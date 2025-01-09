require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Station = require('./models/Station');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/z-stations', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('MongoDB connection error:', error);
});

// Get all stations or filtered stations
app.get('/api/stations', async (req, res) => {
  try {
    const { fuels, services, stationTypes } = req.query;
    let query = {};

    if (fuels) {
      query.types = { $in: fuels.split(',') };
    }
    if (services) {
      query.services = { $regex: services.split(',').join('|'), $options: 'i' };
    }
    if (stationTypes) {
      query.stationTypes = { $in: stationTypes.split(',') };
    }

    const stations = await Station.find(query);
    res.json(stations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add a new station
app.post('/api/stations', async (req, res) => {
  try {
    const station = new Station(req.body);
    const savedStation = await station.save();
    res.status(201).json(savedStation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
