import React, { Component } from 'react';
import 'normalize.css';
import './style.css';

import Form from '../components/form';
import TechList from '../components/tech-list';
import Logo from '../components/logo';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { technologies: [], technology: '' };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.deleteTechnology = this.deleteTechnology.bind(this);
  }

  onSubmit(event) {
    if (event) {
      event.preventDefault();
    }
    const { technologies, technology } = this.state;
    technologies.push(technology);
    this.setState({ technologies });
    this.setState({ technology: ''})
  }

  onChange(event) {
    if (event) {
      event.preventDefault();
    }
    this.setState({ technology: event.target.value });
  }

  deleteTechnology(item) {
    this.setState({
      technologies: this.state.technologies.filter(
        technology => technology !== item,
      ),
    });
  }

  render() {
    const { technologies, technology } = this.state;
    const { onSubmit, onChange } = this;
    return (
      <section className="app">
        <header className="header">
          <Form
            technology={technology}
            onSubmit={onSubmit}
            onChange={onChange}
          />
          <h1 className="title flex-item">Technologies we learnt</h1>
          <div className="flex-item logo">
            <figure className="logo-wrapper">
              <Logo />
            </figure>
          </div>
        </header>
        <main className="main">
          <TechList
            technologies={technologies}
            deleteTechnology={this.deleteTechnology}
          />
        </main>
      </section>
    );
  }
}

export default App;
