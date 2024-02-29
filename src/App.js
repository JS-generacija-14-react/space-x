import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeView from "./components/views/HomeView";
import LaunchesView from "./components/views/LaunchesView";
import RocketsView from "./components/views/RocketsView";
import ShipsView from "./components/views/ShipsView";
import { Navbar } from "./components/navbar";
function App() {
  return (
    <div className="App">
      <Router>
        <div className="view-wrapper">
          <Navbar />
          <Routes>
            <Route path="/launches" element={<LaunchesView />} />
            <Route path="/rockets" element={<RocketsView />} />
            <Route path="/ships" element={<ShipsView />} />
            <Route path="/" element={<HomeView />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
