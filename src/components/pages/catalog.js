import React, { Component } from 'react';
import{
  Link
} from 'react-router-dom'

class Catalog extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron-cat">
          <h1>Kos Catalog</h1>
          <span><Link to='/'>home</Link>catalog</span>
        </div>
      </div>
    );
  }
}

export default Catalog;
