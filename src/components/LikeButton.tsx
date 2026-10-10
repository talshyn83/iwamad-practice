import { useContext } from 'react'
import { Button } from './ui/Button'
import { LikesContext } from '../context/LikesContext'

export const LikeButton = () => {
  const { likes, setLikes } = useContext(LikesContext)

  return (
    <Button
      variant="primary"
      onClick={() => setLikes(likes + 1)}
      aria-label={`Like (${likes} likes)`}
    >
      Like ({likes})
    </Button>
  )
}