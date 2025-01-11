const express = require('express');
const router = express.Router();
const Station = require('../models/Station');

// Get all stations or filtered stations
router.get('/stations', async (req, res) => {
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

module.exports = router;
