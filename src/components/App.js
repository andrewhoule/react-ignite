// External Imports
import React, { Component } from 'react';

// Styles
import baseStyles from '../styles/base';

class App extends Component {

  componentWillMount() {
    baseStyles();
  }

  render() {
    return (
      <div>Hello World!</div>
    );
  }
}

export default App;
