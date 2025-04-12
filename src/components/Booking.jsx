import React from "react";
import "./Booking.css";

function Booking() {
  return (
    <div className="booking-container">
      <h1>Book a Detailing Appointment</h1>
      <form className="booking-form">
        <label>
          Full Name:
          <input type="text" name="fullName" placeholder="John Doe" required />
        </label>
        <label>
          Email:
          <input type="email" name="email" placeholder="john@example.com" required />
        </label>
        <label>
          Phone Number:
          <input type="tel" name="phone" placeholder="(123) 456-7890" required />
        </label>
        <label>
          Preferred Date:
          <input type="date" name="date" required />
        </label>
        <label>
          Service Type:
          <select name="service">
            <option value="interior">Interior Detail</option>
            <option value="exterior">Exterior Detail</option>
            <option value="full">Full Detail</option>
          </select>
        </label>
        <button type="submit" className="submit-button">Submit Booking</button>
      </form>
    </div>
  );
}

export default Booking;
