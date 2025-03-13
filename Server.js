const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/disasterDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const DisasterSchema = new mongoose.Schema({
  type: String,
  location: { lat: Number, lon: Number },
  severity: Number,
  reportedBy: String,
  timestamp: { type: Date, default: Date.now },
});

const Disaster = mongoose.model("Disaster", DisasterSchema);

app.post("/api/disasters", async (req, res) => {
  try {
    const disaster = new Disaster(req.body);
    await disaster.save();
    res.status(201).json(disaster);
  } catch (error) {
    res.status(500).json({ error: "Error reporting disaster" });
  }
});

app.get("/api/disasters", async (req, res) => {
  try {
    const disasters = await Disaster.find().sort({ timestamp: -1 });
    res.json(disasters);
  } catch (error) {
    res.status(500).json({ error: "Error fetching disasters" });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
