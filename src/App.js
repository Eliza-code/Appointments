import {Route } from "react-router-dom";
import React from "react";

import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Form from './components/Form/Form';
import Detail from './components/Detail/Detail';

function App() {
  return (
    <div className="App">
      <Route path ='/' component={NavBar} />
      <Route exact path = '/' component= {Home}/>
      <Route exact path='/edit/:id' component={Detail} />
    </div>
  );
}

export default App;
