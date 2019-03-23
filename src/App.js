import React, { Component } from 'react';
import{
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

//components
import Header from './components/headerComponent/header'
import Hompage from './components/pages/homePage'
import Footer from './components/footerComponent/footer'
import Catalog from './components/pages/catalog'


import './Assets/css/default.css'
import './Assets/css/catalog.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />

          <Route exact path='/' component={Hompage} />
          <Route exact path='/catalog' component={Catalog} />

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
