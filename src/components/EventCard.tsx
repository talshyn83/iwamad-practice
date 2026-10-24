import { Link } from 'react-router-dom';
import type { CampusEvent } from '../data/events';
import { Card } from './ui/Card';
import { Tag } from './ui/Tag';

type EventCardProps = {
  event: CampusEvent;
};

export function EventCard({ event }: EventCardProps) {
  return (
    <Card className="card">
      <h2>{event.title}</h2>
      <p>{event.date} | {event.place}</p>
      
      <div style={{ marginBottom: '20px' }}>
        <Tag label={`${event.seats} seats`} />
      </div>
      
      <Link 
        to={`/events/${event.id}`} 
        style={{ color: '#0056b3', textDecoration: 'underline' }}
      >
        Details
      </Link>
    </Card>
  );
}