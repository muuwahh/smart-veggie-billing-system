import React, { useState } from "react";

function Billing() {
  const [weight, setWeight] = useState("");
  const [price, setPrice] = useState("");
  const [total, setTotal] = useState(0);

  const calculate = () => {
    setTotal(weight * price);
  };

  return (
    <div className="container">
      <h2 className="mb-4">🧾 Billing</h2>

      <div className="card shadow p-4">
        <input
          type="number"
          className="form-control mb-3"
          placeholder="Weight (kg)"
          onChange={(e) => setWeight(e.target.value)}
        />

        <input
          type="number"
          className="form-control mb-3"
          placeholder="Price per kg"
          onChange={(e) => setPrice(e.target.value)}
        />

        <button className="btn btn-primary w-100" onClick={calculate}>
          Calculate Total
        </button>

        <h4 className="mt-4 text-center">Total: ₹{total}</h4>
      </div>
    </div>
  );
}

export default Billing;