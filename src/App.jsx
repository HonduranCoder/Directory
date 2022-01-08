import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Home from './views/Home/Home.jsx';
import Login from './views/Login/Login.jsx';
import Profile from './views/Profile/Profile.jsx';
import EditProfile from './views/EditProfile/EditProfile.jsx';
import Register from './views/Register/Register.jsx';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx';
import { UserProvider } from './context/UserContext';
import { ProfileProvider } from './context/ProfileContext.jsx';

export default function App() {
  return (
    <UserProvider>
      <ProfileProvider>
        <Router>
          <Header />
          <Switch>
            <PrivateRoute path="/editprofile">
              <EditProfile />
            </PrivateRoute>
            <PrivateRoute path="/profile">
              <Profile />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </ProfileProvider>
    </UserProvider>
  );
}
