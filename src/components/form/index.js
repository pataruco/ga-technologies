import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { technologies: [], technology: '' };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    if (event) {
      event.preventDefault();
    }
    this.setState({ technology: event.target.value });
  }

  onSubmit(event) {
    if (event) {
      event.preventDefault();
    }
    const { technologies, technology } = this.state;
    technologies.push(technology);
    this.setState({ technologies });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label htmlFor="technology">Technology:</label>
        <input
          type="text"
          id="technology"
          name="technology"
          onChange={this.onChange}
          value={this.state.technology}
        />
        <input type="submit" value="enter" />
      </form>
    );
  }
}

export default Form;
