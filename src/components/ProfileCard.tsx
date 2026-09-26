import { useState } from "react";
import SkillBadge, { type Skill } from "./SkillBadge";

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
  const [liked, setLiked] = useState<boolean>(false);
  const [selectedSkillId, setSelectedSkillId] = useState<number | null>(null);

  const selectedSkill = skills.find((s) => s.id === selectedSkillId);

  return (
    <div className={liked ? "profile-card liked" : "profile-card"}>
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
              isActive={skill.id === selectedSkillId}
              onClick={() =>
                setSelectedSkillId(skill.id === selectedSkillId ? null : skill.id)
              }
            />
          ))}
        </ul>
      ) : (
        <p className="empty-message">No skills added yet.</p>
      )}

      {selectedSkill && (
        <p className="skill-level">
          <strong>{selectedSkill.label}</strong> — {selectedSkill.level}
        </p>
      )}

      <p className="links">
        <a href={`mailto:${email}`}>Email</a>
        {" | "}
        <a href={github} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </p>

      <button type="button" onClick={() => setLiked(!liked)}>
        {liked ? "♥ Liked" : "♡ Like"}
      </button>

      <p className="like-text">
        {liked
          ? "You liked this profile card!"
          : "You haven't liked this card yet."}
      </p>

      <p className="card-email">
        <a href={`mailto:${email}`}>{email}</a>
      </p>
    </div>
  );
}

export default ProfileCard;