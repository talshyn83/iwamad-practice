import SkillBadge, { type Skill } from "./SkillBadge";
import LikeButton from './LikeButton';

type ProfileCardProps = {
  name: string;
  role: string;
  bio: string;
  email: string;
  github: string;
  skills: Skill[];
};

function ProfileCard({
  name,
  role,
  bio,
  email,
  github,
  skills,
}: ProfileCardProps) {
  return (
    <div className="profile-card">
      <div className="profile-top">
        <div className="avatar">{name[0]}</div>
        <h2 className="profile-name">{name}</h2>
        <p className="role">{role}</p>
        <p className="bio">{bio}</p>
      </div>

      {skills.length > 0 ? (
        <ul className="skills-list">
          {skills.map((skill) => (
            <SkillBadge
              key={skill.id}
              skill={skill}
              isActive={false}
              onClick={() => {}}
            />
          ))}
        </ul>
      ) : (
        <p className="empty-message">No skills added yet.</p>
      )}

      <p className="links">
        <a href={`mailto:${email}`}>Email</a>
        {" | "}
        <a href={github} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </p>

      <LikeButton />

      <p className="card-email">
        <a href={`mailto:${email}`}>{email}</a>
      </p>
    </div>
  );
}

export default ProfileCard;