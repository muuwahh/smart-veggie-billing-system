import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Scanning from "./pages/Scanning";
import Billing from "./pages/Billing";
import Payment from "./pages/Payment";

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex">

        {/* Sidebar */}
        <div className="bg-dark text-white p-3 vh-100" style={{ width: "250px" }}>
          <h4 className="mb-4">Dashboard</h4>

          <Link to="/" className="nav-link text-white">Live Billing</Link>
          <Link to="/billing" className="nav-link text-white">Billing</Link>
          <Link to="/payment" className="nav-link text-white">Payment</Link>

          <hr className="bg-light" />

          <h6>Devices</h6>
          <p className="small">Scale Sensor: Online</p>
          <p className="small">Camera: Online</p>
        </div>

        {/* Main */}
        <div className="flex-grow-1 p-4 bg-light">
          <Routes>
            <Route path="/" element={<Scanning />} />
            <Route path="/billing" element={<Billing />} />
            <Route path="/payment" element={<Payment />} />
          </Routes>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;