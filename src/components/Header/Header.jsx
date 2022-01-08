//Employee Directory
//signed in as: email
//sign out button
//A “Sign In” button if the user is signed out
//A “You are signed in as ${email}”` message with a “Sign Out” button if the user is signed in
import { useUser } from '../../context/UserContext.jsx';
import { Link } from 'react-router-dom';
import { signOutUser } from '../../services/users.js';
import { useHistory } from 'react-router-dom';

export default function Header() {
  const { user, setUser } = useUser();
  const history = useHistory();

  const handleSignOut = async () => {
    await signOutUser();
    setUser(null);
    history.push('/login');
  };

  return (
    <div>
      <span>Directory</span>{' '}
      <span>
        {user ? (
          <>
            You are signed in as {user.email}{' '}
            <button onClick={handleSignOut}> Sign out </button>{' '}
          </>
        ) : (
          <Link to="/login">
            <button>Sign in</button>
          </Link>
        )}
      </span>
    </div>
  );
}
//wrap in fragment because it needs a parent, they can't be siblings.
