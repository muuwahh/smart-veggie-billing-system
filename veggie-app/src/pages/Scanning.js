import React, { useState } from "react";

function Scanning() {
  const [item, setItem] = useState("");
  const [weight, setWeight] = useState(0);
  const [total, setTotal] = useState(0);

  const prices = {
    Tomato: 40,
    Potato: 30,
    Onion: 25,
  };

  const simulate = (name) => {
    const w = (Math.random() * 2).toFixed(2);
    setItem(name);
    setWeight(w);
    setTotal(w * prices[name]);
  };

  return (
    <div>

      {/* Top Stats */}
      <div className="row mb-4">
        <div className="col-md-3">
          <div className="card p-3 text-center">
            <h6>Items Scanned</h6>
            <h4>1</h4>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card p-3 text-center">
            <h6>Session Total</h6>
            <h4>₹{total}</h4>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card p-3 text-center">
            <h6>Accuracy</h6>
            <h4>--</h4>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card p-3 text-center">
            <h6>Weight</h6>
            <h4>{weight} kg</h4>
          </div>
        </div>
      </div>

      {/* Main Panels */}
      <div className="row">

        {/* Scale */}
        <div className="col-md-4">
          <div className="card p-4 text-center">
            <h5>Scale</h5>
            <h2>{weight} kg</h2>
            <p>Status: Ready</p>
          </div>
        </div>

        {/* Detection */}
        <div className="col-md-4">
          <div className="card p-4 text-center">
            <h5>Detection</h5>
            <p>Item: {item || "--"}</p>
            <p>Price: ₹{prices[item] || 0}/kg</p>

            <button className="btn btn-primary m-1" onClick={() => simulate("Tomato")}>Tomato</button>
            <button className="btn btn-primary m-1" onClick={() => simulate("Potato")}>Potato</button>
            <button className="btn btn-primary m-1" onClick={() => simulate("Onion")}>Onion</button>
          </div>
        </div>

        {/* Bill */}
        <div className="col-md-4">
          <div className="card p-4 text-center">
            <h5>Bill</h5>
            <p>Item: {item}</p>
            <p>Weight: {weight} kg</p>
            <p>Total: ₹{total}</p>

            <button className="btn btn-success">Checkout</button>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Scanning;