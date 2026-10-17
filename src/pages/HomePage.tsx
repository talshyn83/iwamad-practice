import { ProfileCard } from '../components/ProfileCard';
import { LikeButton } from '../components/LikeButton';

export function HomePage() {
  return (
    <main>
      <ProfileCard />
      <LikeButton />
    </main>
  );
}