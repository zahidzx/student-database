function EventCard({ event }) {
  return (
    <div className="event-card">
      <h2>{event.name}</h2>
      <p>Date: {event.event_date}</p>
      <p>Venue: {event.venue}</p>
      <p>Available Seats: {event.seats}</p>
    </div>
  );
}

export default EventCard;