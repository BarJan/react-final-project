import './App.css';
import Parse from 'parse';
import { useState } from 'react';
import UserObj from './models/UserObj';
import Switch from 'react-bootstrap/esm/Switch';
import HomePage from './pages/HomePage/HomePage';
import { HashRouter, Route } from 'react-router-dom';
import DatesPage from './pages/DatesPage/DatesPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import UserHomePage from './pages/UserHomePage/UserHomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [activeUser, setActiveUser] = useState(
    Parse.User.current() ? new UserObj(Parse.User.current()) : null);   // During development it's conveient to be logged in by default 
  
  function handleLogout() {
    setActiveUser(null);
    Parse.User.logOut();
  }

  function handleLogin(loggedinUser) {
    setActiveUser(loggedinUser);
  }

  return (
    <HashRouter>
      <Switch>
        <Route exact path="/"><HomePage activeUser={activeUser} onLogout={handleLogout}/></Route>
        <Route exact path="/UserHome"><UserHomePage activeUser={activeUser} onLogout={handleLogout}/></Route>
        <Route exact path="/login"><LoginPage activeUser={activeUser} onLogin={handleLogin}/></Route>
        <Route exact path="/dates"><DatesPage activeUser={activeUser} onLogout={handleLogout}/></Route>
        <Route exact path="/profile"><ProfilePage activeUser={activeUser} onLogout={handleLogout} /></Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
