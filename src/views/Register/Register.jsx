import BaseForm from '../../components/BaseForm/BaseForm.jsx';
import { useState } from 'react';
import { signUpUser } from '../../services/users.js';
import { useUser } from '../../context/UserContext.jsx';
import { useHistory } from 'react-router-dom';
//Sign up
//button state/text
export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useUser();
  const history = useHistory();
  //call the signup function from users file.
  const handleSignup = async (e) => {
    e.preventDefault();
    const user = await signUpUser(email, password);
    setUser(user);
    history.replace('/editprofile');
  };

  return (
    <div>
      <p>Welcome!</p>
      <fieldset>
        <legend>Register</legend>
        <BaseForm
          label="Register"
          handleSubmit={handleSignup}
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
