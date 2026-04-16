import React from "react";

function Payment() {
  return (
    <div>
      <h2>Payment</h2>

      <div className="card p-3">
        <h4>Total Amount: ₹100</h4>

        <button className="btn btn-success m-2">Pay via UPI</button>
        <button className="btn btn-warning m-2">Cash</button>
        <button className="btn btn-info m-2">Card</button>
      </div>
    </div>
  );
}

export default Payment;