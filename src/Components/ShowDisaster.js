import { useEffect, useState } from "react";
import axios from "axios";

const ShowDisaster = () => {
  const [disasters, setDisasters] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/disasters")
      .then((res) => setDisasters(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h2>Reported Disasters</h2>
      <ul>
        {disasters.map((disaster) => (
          <li key={disaster._id}>
            {disaster.type} at [{disaster.location.lat}, {disaster.location.lon}] <br />
            Severity: {disaster.severity} | Reported By: {disaster.reportedBy}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowDisaster;
