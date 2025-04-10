import React, { useState } from "react";
// import "./Booking.css";

function Booking() {
  const [selectedDate, setSelectedDate] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleBooking = () => {
    if (selectedDate) {
      setSuccessMessage(`Booking confirmed for ${selectedDate}`);
    } else {
      alert("Please select a date.");
    }
  };

  return (
    <div className="booking">
      <h2>Book a Detailing Slot</h2>
      <input type="date" onChange={(e) => setSelectedDate(e.target.value)} />
      <button onClick={handleBooking}>Book Now - £15</button>
      {successMessage && <p className="success">{successMessage}</p>}
    </div>
  );
}

export default Booking;
