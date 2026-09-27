import { useEffect, useState } from "react";
import { supabase } from "../supabase";

function History() {
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRegistrations();
  }, []);

  async function fetchRegistrations() {
    const { data, error } = await supabase
      .from("registrations")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching registrations:", error);
    } else {
      setRegistrations(data);
    }

    setLoading(false);
  }

  if (loading) {
    return <h2>Loading registration history...</h2>;
  }

  return (
    <div className="history">
      <h1>Registration History</h1>

      {registrations.length === 0 ? (
        <p>No registrations found.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>USN</th>
              <th>Event</th>
              <th>Tickets</th>
            </tr>
          </thead>

          <tbody>
            {registrations.map((registration) => (
              <tr key={registration.id}>
                <td>{registration.name}</td>
                <td>{registration.usn}</td>
                <td>{registration.event}</td>
                <td>{registration.tickets}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default History;