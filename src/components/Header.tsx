import { NavLink } from 'react-router-dom';
import { useLikes } from '../context/LikesContext'; // проверьте путь к вашему LikesContext

type HeaderProps = {
  title: string;
  subtitle?: string;
};

function Header({ title, subtitle }: HeaderProps) {
  // Вызываем хук useLikes
  const likesCount = useLikes(); // если хук возвращает объект, например { likes }, укажите: const { likes } = useLikes();

  return (
    <header className="header">
      <h1>{title}</h1>
      {subtitle && <p className="subtitle">{subtitle}</p>}

      {/* Навигация с помощью NavLink */}
      <nav>
        <NavLink to="/">Главная</NavLink>
      </nav>

      {/* Отображение количества лайков */}
      <div className="header-likes">
        ❤️ {typeof likesCount === 'object' ? likesCount.likes : likesCount}
      </div>
    </header>
  );
}

export default Header;