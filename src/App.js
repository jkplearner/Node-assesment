import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Report from "./Components/Report";
import ShowDisaster from "./Components/ShowDisaster";

function App() {
  return (
    <Router>
      <div className="container">
        <h1>Disaster Management System</h1>
        <nav>
          <Link to="/report"><button>Report a Disaster</button></Link>
          <Link to="/show"><button>Show Disasters</button></Link>
        </nav>
        <Routes>
          <Route path="/report" element={<Report />} />
          <Route path="/show" element={<ShowDisaster />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
