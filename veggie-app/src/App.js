import React, { useState } from "react";

function App() {
  const [item, setItem] = useState("");
  const [weight, setWeight] = useState("");
  const [price, setPrice] = useState("");
  const [total, setTotal] = useState(0);

  const calculateTotal = () => {
    const result = weight * price;
    setTotal(result);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🥬 Veggie Billing App</h1>

      <input
        type="text"
        placeholder="Item"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <br /><br />

      <input
        type="number"
        placeholder="Weight (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      <br /><br />

      <input
        type="number"
        placeholder="Price per kg"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <br /><br />

      <button onClick={calculateTotal}>Calculate</button>

      <h2>Total: ₹{total}</h2>
    </div>
  );
}

export default App;