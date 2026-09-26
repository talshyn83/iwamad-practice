import { useState } from "react";
import SkillBadge from "./SkillBadge";

type Skill = {
  id: number;
  label: string;
};

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
            <SkillBadge key={skill.id} skill={skill} />
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

      <button type="button" onClick={() => setLiked(!liked)}>
        {liked ? "♥ Liked" : "♡ Like"}
      </button>

      <p className="like-text">
        {liked
          ? "You liked this profile card!"
          : "You haven't liked this card yet."}
      </p>
    </div>
  );
}

export default ProfileCard;