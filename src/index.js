const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

// Routes will be imported here
// app.use('/api', require('./routes'));

// Mongoose schema model for fuel stations
const fuelStationSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  lat: { type: Number, required: true },
  lng: { type: Number, required: true },
  prices: {
    'ZX premium': { type: Number },
    'Z91 unleaded': { type: Number },
    'Z diesel': { type: Number },
    'EV charging': { type: Number }
  },
  services: { type: String },
  types: [{ type: String }],
  stationTypes: [{ type: String }],
  street: { type: String },
  locality: { type: String },
  country: { type: String }
});

// Create text index on services field
fuelStationSchema.index({ services: 'text' });

// Create a Mongoose model from the schema
const FuelStation = mongoose.model("FuelStation", fuelStationSchema,"locations");

// Filter stations endpoint
app.get("/api/stations", async (req, res) => {
  try {
    const { services, fuels, stationTypes } = req.query;

    // Start with a base query
    let query = {};

    // Add services filter if present
    if (services) {
      const serviceList = services.split(',');
      // Create a text search query that matches any of the services
      query.$text = { 
        $search: serviceList.map(service => `"${service.trim()}"`).join(' ') 
      };
    }

    // Add fuel types filter if present
    if (fuels) {
      const fuelList = fuels.split(',');
      query.types = {
        $in: fuelList
      };
    }

    // Add station types filter if present
    if (stationTypes) {
      const typesList = stationTypes.split(',');
      query.stationTypes = {
        $in: typesList
      };
    }

    // Find stations matching the query
    const stations = await FuelStation.find(query);
    res.json(stations);
  } catch (err) {
    console.error('Error:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

app.get("/fuelstations", async (req, res) => {
  try {
    const stations = await FuelStation.find();
    res.json(stations);
  } catch (err) {
    res.status(500).send("Error fetching items");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
