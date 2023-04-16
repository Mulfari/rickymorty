import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import CharactersList from './components/CharactersList';
import CharacterDetails from './components/CharacterDetails';
import EpisodesList from './components/EpisodesList';
import LocationsList from './components/LocationsList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <main>
          <Switch>
            <Route exact path="/">
              <CharactersList />
            </Route>
            <Route path="/personaje/:id">
              <CharacterDetails />
            </Route>
            <Route path="/episodios">
              <EpisodesList />
            </Route>
            <Route path="/ubicaciones">
              <LocationsList />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
