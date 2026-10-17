import { ProfileCard } from '../components/ProfileCard';
import { LikeButton } from '../components/LikeButton';

export function HomePage() {
  return (
    <main style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start' }}>
      <ProfileCard />
      <LikeButton />
    </main>
  );
}