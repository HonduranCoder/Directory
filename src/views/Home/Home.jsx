import React from 'react';
import { useUser } from '../../context/UserContext.jsx';
//Welcome Page/Landing Page
//Option to Create Account or Sign in
export default function Home() {
  const { user } = useUser();

  return (
    <div>
      <h3>Welcome to a Random Directory</h3>
      {!user ? (
        <p>
          <a href="/register"> Register</a> <a href="/login"> Login</a>
        </p>
      ) : (
        <p>
          <a href="/profile">Profile</a>
        </p>
      )}
    </div>
  );
}
