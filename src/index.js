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
    type: Map,
    of: Number,
    required: true,
  },
});


// Create a Mongoose model from the schema
const FuelStation = mongoose.model("FuelStation", fuelStationSchema,"locations");

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
