import { useState } from "react";
import { supabase } from "../supabase";

function Registration() {
  const [name, setName] = useState("");
  const [usn, setUsn] = useState("");
  const [event, setEvent] = useState("");
  const [tickets, setTickets] = useState(1);

  async function handleSubmit(e) {
    e.preventDefault();

    const { error } = await supabase
      .from("registrations")
      .insert([
        {
          name: name,
          usn: usn,
          event: event,
          tickets: Number(tickets)
        }
      ]);

    if (error) {
      console.error("Registration error:", error);
      alert("Registration failed");
    } else {
      alert("Registration successful!");

      setName("");
      setUsn("");
      setEvent("");
      setTickets(1);
    }
  }

  return (
    <div className="registration">
      <h1>Event Registration</h1>

      <form onSubmit={handleSubmit}>
        <label>Student Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label>USN</label>
        <input
          type="text"
          value={usn}
          onChange={(e) => setUsn(e.target.value)}
          required
        />

        <label>Select Event</label>
        <select
          value={event}
          onChange={(e) => setEvent(e.target.value)}
          required
        >
          <option value="">Select an event</option>
          <option value="Tech Fest">Tech Fest</option>
          <option value="Cultural Fest">Cultural Fest</option>
          <option value="Sports Day">Sports Day</option>
        </select>

        <label>Number of Tickets</label>
        <input
          type="number"
          min="1"
          value={tickets}
          onChange={(e) => setTickets(e.target.value)}
          required
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Registration;