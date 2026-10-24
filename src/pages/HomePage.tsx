import { useState } from 'react';
import { Card } from '../components/ui/Card';

export function HomePage() {
  // Создаем состояние для хранения количества лайков
  const [likes, setLikes] = useState(0);

  return (
    <Card style={{ textAlign: 'center' }}>
      <h1 style={{ fontSize: '2.5rem', margin: '0 0 8px 0', color: '#111' }}>Talshyn</h1>
      <p style={{ fontSize: '1.2rem', color: '#555', marginBottom: '24px' }}>Frontend Developer & Student</p>
      
      {/* Добавляем обработчик клика, который увеличивает счетчик */}
      <button 
        className="btn" 
        onClick={() => setLikes(likes + 1)}
      >
        Like ({likes})
      </button>
    </Card>
  );
}