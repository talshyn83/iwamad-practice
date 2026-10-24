import { Card } from '../components/ui/Card';

export function ContactPage() {
  return (
    <Card style={{ textAlign: 'center' }}>
      <h1 style={{ marginBottom: '24px' }}>Contact Me</h1>
      <p style={{ fontSize: '1.1rem', marginBottom: '16px' }}>
        <strong>Email:</strong> <a href="mailto:t_saparkhan@kbtu.kz" style={{ color: '#0056b3' }}>t_saparkhan@kbtu.kz</a>
      </p>
      <p style={{ fontSize: '1.1rem' }}>
        <strong>GitHub:</strong> <a href="https://github.com/talshyn83" style={{ color: '#0056b3' }}>github.com/talshyn83</a>
      </p>
    </Card>
  );
}