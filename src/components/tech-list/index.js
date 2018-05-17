import React from 'react';

const TechList = props => {
  const { deleteTechnology, technologies } = props;

  const removeItem = item => {
    deleteTechnology(item);
  };

  const listTechnologies = technologies.map(technology => {
    const key = technology.toString();
    return (
      <li key={key}>
        {technology}
        <button onClick={() => removeItem(key)}>delete</button>
      </li>
    );
  });

  return <ul>{listTechnologies}</ul>;
};

export default TechList;
