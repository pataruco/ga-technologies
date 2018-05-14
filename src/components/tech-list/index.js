import React, { Component } from 'react';

class TechList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { technologies } = this.props;

    const listTechnologies = technologies.map(technology => (
      <li key={technology.toString()}>{technology}</li>
    ));

    return <ul>{listTechnologies}</ul>;
  }
}

export default TechList;
