import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/"><HomePage activeUser={activeUser} onLogout={handleLogout}/></Route>
        <Route exact path="/login"><LoginPage activeUser={activeUser} users={users} onLogin={handleLogin}/></Route>
        <Route exact path="/dates"><DatesPage activeUser={activeUser} dates={activeUserDates} addDate={addDate}/></Route>
        <Route exact path="/profile"><PrfilePage activeUser={activeUser} onLogout={handleLogout} /></Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
