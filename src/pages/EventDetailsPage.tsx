import { useParams, Link } from 'react-router-dom';
import { events } from '../data/events';
// Импортируй форму после ее создания в Шаге 2

export function EventDetailsPage() {
  const { eventId } = useParams();
  const event = events.find((item) => item.id === Number(eventId));

  if (!event) {
    return (
      <div>
        <h1>Event not found</h1>
        <p>No event with id {eventId}.</p>
        <Link to="/events">Back to Events</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>{event.title}</h1>
      <p>{event.date} | {event.place}</p>
      {/* Здесь будет <EventSignupForm event={event} /> */}
      <Link to="/events">Back to Events</Link>
    </div>
  );
}