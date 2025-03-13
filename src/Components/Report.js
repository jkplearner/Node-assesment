import { useState } from "react";
import axios from "axios";

const Report = () => {
  const [formData, setFormData] = useState({
    type: "",
    location: { lat: "", lon: "" },
    severity: "",
    reportedBy: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "lat" || name === "lon") {
      setFormData({
        ...formData,
        location: { ...formData.location, [name]: value },
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/disasters", formData);
      alert("Disaster reported successfully!");
    } catch (error) {
      console.error(error);
      alert("Error reporting disaster.");
    }
  };

  return (
    <div>
      <h2>Report a Disaster</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="type" placeholder="Disaster Type" onChange={handleChange} required />
        <input type="number" name="lat" placeholder="Latitude" onChange={handleChange} required />
        <input type="number" name="lon" placeholder="Longitude" onChange={handleChange} required />
        <input type="number" name="severity" placeholder="Severity (1-10)" onChange={handleChange} required />
        <input type="text" name="reportedBy" placeholder="Reported By" onChange={handleChange} required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Report;
