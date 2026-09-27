import { useEffect, useState } from "react";
import { supabase } from "../supabase";
import EventCard from "../Components/EventCard";

function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEvents();
  }, []);

  async function fetchEvents() {
    const { data, error } = await supabase
      .from("events")
      .select("*");

    if (error) {
      console.error("Error fetching events:", error);
    } else {
      setEvents(data);
    }

    setLoading(false);
  }

  if (loading) {
    return <h2>Loading events...</h2>;
  }

  return (
    <div className="events">
      <h1>Upcoming Events</h1>

      <div className="event-list">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}

export default Events;