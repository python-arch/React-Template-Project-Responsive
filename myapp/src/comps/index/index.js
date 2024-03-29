import React, { Component } from 'react';
import Home from './../Home/index'
import About from './../About/index'
import Portfolio from './../portfolio/index'
import Profile from './../Profile/index'
import Work from './../Work/index'
import SocialMedia from './../SocialMedia/index'
import Footer from './../Footer/index'
class Index extends Component {
  render() {
    return (
      <div className="App">
    <Home />
    <Work />
    <Portfolio />
    <Profile />
    <About />
    <SocialMedia />
    <Footer />
      </div>
    );
  }
}

export default Index;
