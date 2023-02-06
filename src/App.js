import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './layouts/Navbar';
import AllGalleries from './pages/AllGalleries';
import Login from './pages/Login';
import Register from './pages/Register';



function App() {
  return (
    <div>
     <Navbar/>
     <Switch>   
        <Route exact path="/" component={Navbar}/>
        <Route  path="/allgalleries" component={AllGalleries}/>
        <Route  path="/login" component={Login}/>
        <Route  path="/register" component={Register}/>
      </Switch>
    </div>
  );
}

export default App;