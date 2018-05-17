import React from 'react';

const TechList = props => {
  const { technologies } = props;

  let counter = 0;
  const listTechnologies = technologies.map(technology => {
    const key = technology.toString() + counter;
    counter++;
    return <li key={key}>{technology}</li>;
  });

  return <ul>{listTechnologies}</ul>;
};

export default TechList;
