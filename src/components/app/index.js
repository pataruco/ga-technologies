import React, { Component } from 'react';
import 'normalize.css';
import './style.css';

import Form from '../form';

class App extends Component {
  render() {
    return (
      <section className="app">
        <h1>Technologies we learnt</h1>
        <Form />
      </section>
    );
  }
}

export default App;
