import React from 'react';

const TechList = props => {
  const { technologies } = props;

  const listTechnologies = technologies.map(technology => (
    <li key={technology.toString()}>{technology}</li>
  ));

  return <ul>{listTechnologies}</ul>;
};

export default TechList;
