import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { NewPlace } from "./pages/NewPlace";
import { Place } from "./pages/Place";
import { Travels } from "./pages/Travels";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-place" element={<NewPlace />} />
        <Route path="/place" element={<Place />} />
        <Route path="/travels" element={<Travels />} />
      </Routes>
    </Router>
  );
}

export default App;
