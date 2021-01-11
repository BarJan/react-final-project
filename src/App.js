import './App.css';
import Parse from 'parse';

function App() {

  const [activeUser, setActiveUser] = useState(
    Parse.User.current() ? new UserModel(Parse.User.current()) : null);   // During development it's conveient to be logged in by default  

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
        <Route exact path="/login"><LoginPage activeUser={activeUser} users={users} onLogin={handleLogin}/></Route>
        <Route exact path="/dates"><DatesPage activeUser={activeUser} dates={activeUserDates} addDate={addDate}/></Route>
        <Route exact path="/profile"><PrfilePage activeUser={activeUser} onLogout={handleLogout} /></Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
