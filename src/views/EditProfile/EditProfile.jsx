import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useUser } from '../../context/UserContext.jsx';
import {
  createProfile,
  getProfile,
  updateProfile,
} from '../../services/profiles.js';

export default function EditProfile() {
  const { user } = useUser();
  const history = useHistory();
  const [profile, setProfile] = useState({});
  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [bio, setBio] = useState('');

  useEffect(() => {
    //get the profile from supabase table
    //set the profile
    const setProfileResponse = async () => {
      const res = await getProfile();
      setProfile(res);
      setName(res.name);
      setBirthday(res.birthday);
      setBio(res.bio);
    };
    setProfileResponse();
  }, []);

  const handleCreateSubmit = async (e) => {
    e.preventDefault();
    const email = user.email;
    const profile = await createProfile({ name, email, bio, birthday });
    if (profile) {
      history.push('/profile');
    }
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    const email = user.email;
    const update = await updateProfile({ name, email, bio, birthday });
    if (update) {
      history.push('/profile');
    }
  };

  // const handleChange = (e) => {
  //   setProfile(e.target.value);
  // };

  return (
    <>
      <form onSubmit={profile ? handleEditSubmit : handleCreateSubmit}>
        <fieldset>
          {!profile ? <p>Create a Profile</p> : <p>Edit Profile </p>}
          <div>
            <label>
              name:{' '}
              <input
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
              />{' '}
            </label>
          </div>
          <div>
            <label>email: {user.email} </label>
          </div>
          <div>
            <label>
              birthday:{' '}
              <input
                name="birthday"
                value={birthday}
                onChange={(e) => setBirthday(e.target.value)}
                type="date"
              />{' '}
            </label>
          </div>
          <div>
            <label>
              bio:
              <textarea
                name="bio"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                rows="4"
                cols="50"
              />{' '}
            </label>
          </div>
          <button>Save Profile</button>
        </fieldset>
      </form>
    </>
  );
}
