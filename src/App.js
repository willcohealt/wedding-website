import logo from "./logo.svg";
import React from "react"; 
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.js";
import Registry from "./pages/Registry"; 
import Schedule from "./pages/Schedule"; 
import Travel from "./pages/Travel"; 
import WeddingParty from "./pages/WeddingParty";
import Home from "./pages"; 
import Accommodations from "./pages/Accommodations"; 
import Activities from "./pages/Activities"; 
import Footer from "./components/Footer"; 
import RSVP from "./pages/RSVP"; 


function App() {
  return (
    <React.Fragment>
      <Router>
      <div className="App">
      <header>
        <Navbar />
      </header> 
        <Routes>
          <Route path="/" element={<Home />} ></Route>
          <Route path="/travel" element={<Travel />} ></Route>
          <Route path="/accommodations" element={<Accommodations />} ></Route>
          <Route path="/activities" element={<Activities />} ></Route>
          <Route path="/registry" element={<Registry />} ></Route>
          <Route path="/rsvp" element={<RSVP />}></Route>
        </Routes>
      </div>
      </Router>
      <Footer />
</React.Fragment>
  );
}

export default App;
