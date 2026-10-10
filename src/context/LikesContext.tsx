import { createContext, useState, useContext, type ReactNode } from 'react'

// Описываем типы для TypeScript
interface LikesContextType {
  likes: number
  setLikes: (likes: number) => void
}

// Создаем и экспортируем контекст
export const LikesContext = createContext<LikesContextType>({
  likes: 0,
  setLikes: () => {},
})

// Создаем провайдер
export const LikesProvider = ({ children }: { children: ReactNode }) => {
  const [likes, setLikes] = useState(0)

  return (
    <LikesContext.Provider value={{ likes, setLikes }}>
      {children}
    </LikesContext.Provider>
  )
}

// Создаем и экспортируем хук useLikes, чтобы Layout.tsx не выдавал ошибку
export const useLikes = () => {
  return useContext(LikesContext)
}