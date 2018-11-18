import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from 'reactstrap';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Radio from './pages/Radio/Radio';
import Releases from './pages/Releases/Releases';
import Video from './pages/Video/Video';


import './App.css';

class App extends Component {
  render() {
    return (
        <div className='App'>
        <Router>
          <div>
          <Header />
          <Container fluid={true}>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/about' component={About}/>
              <Route path='/radio' component={Radio}/>
              <Route path='/releases' component={Releases}/>
              <Route path='/video' component={Video}/>
            </Switch>
          </Container>
          <Footer />
          </div>
          </Router>
        </div>
    );
  }
}

export default App;
