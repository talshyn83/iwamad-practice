import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";
import Footer from "./components/Footer";
import SkillBadge from "./components/SkillBadge";
import "./App.css";

type Skill = {
  id: number;
  label: string;
};

const skills: Skill[] = [
  { id: 1, label: "HTML" },
  { id: 2, label: "Python" },
  { id: 3, label: "AWS" },
  { id: 4, label: "Jupyter Notebook" },
];

function App() {
  return (
    <>
      <Header title="Talshyn Saparkhan" subtitle="IT Management Student" />

      <hr />

      <ProfileCard
        name="Talshyn"
        role="IT Management Student"
        bio="I am an IT Management student interested in technology, web development, and learning new digital skills."
        email="t_saparkhan@kbtu.kz"
        github="https://github.com/"
      />

      <hr />

      <section>
        <h2>About</h2>
        <p>
          I am an IT Management student. I am interested in technology and web
          development. I want to learn HTML and improve my web development
          skills in this course.
        </p>
        <img src="/week-01/photo.jpg" alt="My photo" width="300" />
      </section>

      <hr />

      <section>
        <h2>Skills</h2>
        {skills.length > 0 ? (
          <ul>
            {skills.map((skill) => (
              <SkillBadge key={skill.id} skill={skill} />
            ))}
          </ul>
        ) : (
          <p>No skills added yet.</p>
        )}
      </section>

      <hr />

      <section>
        <h2>Goals</h2>
        <table border={1} cellPadding={8}>
          <thead>
            <tr>
              <th>Skill</th>
              <th>Level</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>HTML</td>
              <td>Intermediate</td>
            </tr>
            <tr>
              <td>Python</td>
              <td>Intermediate</td>
            </tr>
            <tr>
              <td>AWS</td>
              <td>Intermediate</td>
            </tr>
            <tr>
              <td>Jupyter Notebook</td>
              <td>Intermediate</td>
            </tr>
          </tbody>
        </table>
      </section>

      <hr />

      <section>
        <h2>Contact</h2>
        <p>
          <a href="mailto:t_saparkhan@kbtu.kz">t_saparkhan@kbtu.kz</a>
        </p>
        <form>
          <p>
            <label htmlFor="name">Name</label>
            <br />
            <input type="text" id="name" />
          </p>
          <p>
            <label htmlFor="email">Email</label>
            <br />
            <input type="email" id="email" />
          </p>
          <p>
            <label htmlFor="message">Message</label>
            <br />
            <textarea id="message" rows={4} />
          </p>
          <button type="submit">Submit</button>
        </form>
      </section>

      <Footer text="© 2026 Talshyn Saparkhan — IWaMAD" />
    </>
  );
}

export default App;