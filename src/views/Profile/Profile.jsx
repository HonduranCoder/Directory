//Edit Profile button
//Name, email, birthday, comment(in different texts)
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getProfile } from '../../services/profiles.js';

export default function Profile() {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    const fetchProfileInfo = async () => {
      const profileInfo = await getProfile();
      setProfile(profileInfo);
    };
    fetchProfileInfo();
  }, []);

  return (
    <div>
      <p>name: {profile.name}</p>
      <p>email:{profile.email}</p>
      <p>birthday: {profile.birthday}</p>
      <p>bio: {profile.bio}</p>
      <Link to="/editprofile">
        <button>Edit Profile</button>
      </Link>
    </div>
  );
}
