import { Routes, Route } from 'react-router-dom';
import { EventsPage } from './pages/EventsPage';
import { EventDetailsPage } from './pages/EventDetailsPage';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { SkillsPage } from './pages/SkillsPage';
import { ContactPage } from './pages/ContactPage';
import { RegisterPage } from './pages/RegisterPage';
import { NotFoundPage } from './pages/NotFoundPage';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="skills" element={<SkillsPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="events" element={<EventsPage />} />
        <Route path="events/:eventId" element={<EventDetailsPage />} />
      </Route>
    </Routes>
  );
}