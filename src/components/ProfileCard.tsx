import { useState } from "react";

type ProfileCardProps = {
  name: string;
  role: string;
  bio: string;
  email: string;
  github: string;
};

function ProfileCard({ name, role, bio, email, github }: ProfileCardProps) {
  const [liked, setLiked] = useState(false);

  return (
    <div className={liked ? "profile-card liked" : "profile-card"}>
      <div className="profile-top">
        <div className="avatar">{name[0]}</div>
        <div>
          <h2>{name}</h2>
          <p>{role}</p>
          <p>{bio}</p>
        </div>
      </div>

      <p>
        <a href={`mailto:${email}`}>Email</a> |{" "}
        <a href={github} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </p>

      <button type="button" onClick={() => setLiked(!liked)}>
        {liked ? "♥ Liked" : "♡ Like"}
      </button>
      <p>
        {liked
          ? "You liked this profile card!"
          : "You haven't liked this card yet."}
      </p>
    </div>
  );
}

export default ProfileCard;