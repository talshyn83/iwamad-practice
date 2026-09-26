import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";
import Footer from "./components/Footer";
import type { Skill } from "./components/SkillBadge";
import "./App.css";

const skills: Skill[] = [
  { id: 1, label: "HTML", level: "Intermediate" },
  { id: 2, label: "Python", level: "Intermediate" },
  { id: 3, label: "AWS", level: "Intermediate" },
  { id: 4, label: "Jupyter Notebook", level: "Intermediate" },
];

function App() {
  return (
    <div className="app">
      <Header title="Talshyn Saparkhan" subtitle="IT Management Student" />

      <ProfileCard
        name="Talshyn"
        role="IT Management Student"
        bio="I am an IT Management student interested in technology, web development, and learning new digital skills."
        email="t_saparkhan@kbtu.kz"
        github="https://github.com/talshyn83"
        skills={skills}
      />

      <Footer text="© 2026 Talshyn Saparkhan — IWaMAD" />
    </div>
  );
}

export default App;