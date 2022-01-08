import { createContext, useContext, useState } from 'react';
import { getUser } from '../services/users';

const UserContext = createContext();
//Provider: provide state to other components
const UserProvider = ({ children }) => {
  const currentUser = getUser();
  const [user, setUser] = useState(
    //as the user in our state
    //expression that asks JS a question, JS will check and answer the question for us.
    currentUser ? { id: currentUser.id, email: currentUser.email } : null
  );
  return (
    //value is a React prop
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
//custom hook to use throughout (function)
const useUser = () => {
  const userCtx = useContext(UserContext);
  if (userCtx === undefined) {
    throw new Error('Must be wrapped in a UserProvider to use useUser');
  }
  return userCtx;
};

export { UserProvider, useUser };
