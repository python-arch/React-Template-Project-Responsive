import React, { Component } from 'react';
import {BrowserRouter , Route ,Switch} from 'react-router-dom'
import './App.css';
import Contact from './comps/Contact/index'
import Navbar from './comps/Navbar/index'
import Index from './comps/index/index'
import Styled from 'styled-components'
class App extends Component {
  render() {
    return (
      <BrowserRouter className="App">
        <Navbar />
      <Switch>
    <Route exact path='/' component={Index} />
    <Route exact path='/contact' component={Contact} />
    </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
