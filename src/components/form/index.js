import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <label htmlFor="technology">Technology:</label>
        <input
          type="text"
          id="technology"
          name="technology"
          onChange={this.props.onChange}
          value={this.props.technology}
        />
        <input type="submit" value="enter" />
      </form>
    );
  }
}

export default Form;
