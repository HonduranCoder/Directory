import BaseForm from '../../components/BaseForm/BaseForm.jsx';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { signInUser } from '../../services/users.js';
import { useUser } from '../../context/UserContext.jsx';
import { useProfile } from '../../context/ProfileContext.jsx';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useUser();
  const { profile } = useProfile();
  const history = useHistory();
  const handleSignIn = async (e) => {
    e.preventDefault();
    const user = await signInUser(email, password);
    setUser(user);
    {
      profile ? history.replace('/profile') : history.replace('/editprofile');
    }
  };
  return (
    <div>
      <p>Welcome Back!</p>
      <fieldset>
        <legend>Login</legend>
        <BaseForm
          label="Login"
          handleSubmit={handleSignIn}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
        />
      </fieldset>
      <p>
        Already have an Account? <a href="/login"> Login</a>
      </p>
    </div>
  );
}
