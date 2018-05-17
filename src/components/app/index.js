import React, { Component } from 'react';
import 'normalize.css';
import './style.css';

import Form from '../form';
import TechList from '../tech-list';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { technologies: [], technology: '' };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit(event) {
    if (event) {
      event.preventDefault();
    }
    const { technologies, technology } = this.state;
    technologies.push(technology);
    this.setState({ technologies });
  }

  onChange(event) {
    if (event) {
      event.preventDefault();
    }
    this.setState({ technology: event.target.value });
  }

  render() {
    const { technologies, technology } = this.state;
    const { onSubmit, onChange } = this;
    return (
      <section className="app">
        <h1>Technologies we learnt</h1>
        <Form technology={technology} onSubmit={onSubmit} onChange={onChange} />
        <TechList technologies={technologies} />
      </section>
    );
  }
}

export default App;
