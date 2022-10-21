import './App.css';
import React from 'react'
import {Route} from 'react-router-dom'
import UserEntry from './components/UserEntry/UserEntry'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Music App</h1>
      </header>
      <Switch>
        <Route exact path="/">
          <UserEntry />
        </Route>
        <Route exact path="/songcollection">
          <SongCollection />
        </Route>
        <Route exact path="/songdisplay">
          <SongDisplay />
        </Route>
        <Route exact path="/songentry">
          <SongEntry />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
