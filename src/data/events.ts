export type CampusEvent = { id: number; title: string; date: string; place: string; seats: number; };

export const events: CampusEvent[] = [
  { id: 1, title: 'React study night', date: '2026-10-22', place: 'Room 302', seats: 20 },
  { id: 2, title: 'TypeScript Workshop', date: '2026-10-25', place: 'Lab 4', seats: 2 },
  { id: 3, title: 'Web Dev Meetup', date: '2026-10-28', place: 'Room 101', seats: 15 },
  { id: 4, title: 'IT Management Guest Lecture', date: '2026-11-02', place: 'Main Hall', seats: 50 }
];