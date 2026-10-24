import { events } from '../data/events';
import { EventCard } from '../components/EventCard';

export function EventsPage() {
  return (
    <div style={{ width: '100%' }}>
      <h1 style={{ textAlign: 'center', marginTop: 0, marginBottom: '32px', fontSize: '2rem' }}>Events</h1>
      <div className="card-grid">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}