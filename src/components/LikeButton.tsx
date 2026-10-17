import { useLikes } from '../context/LikesContext';

export function LikeButton() {
  const { likes, setLikes } = useLikes();

  return (
    <button 
      onClick={() => setLikes(likes + 1)} 
      style={{ padding: '8px 16px', borderRadius: '6px', cursor: 'pointer', border: '1px solid #ccc' }}
    >
      Like ({likes})
    </button>
  );
}