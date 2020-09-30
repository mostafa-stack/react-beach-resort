import React from 'react';
import './App.css'
import Home from './pages/home/Home'
import Rooms from './pages/rooms/Rooms';
import Error from './pages/error/Error';
import SingleRoom from './pages/rooms/single-room/SingleRoom'
import './components/Navbar'
import { Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar';


function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/rooms">
          <Rooms />
        </Route>
        <Route exact path="/rooms/:slug">
          <SingleRoom />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
