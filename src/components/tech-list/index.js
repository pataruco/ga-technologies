import React from 'react';
import DeleteIcon from '../delete-icon';
import './style.css';

const TechList = props => {
  const { deleteTechnology, technologies } = props;

  const removeItem = item => {
    deleteTechnology(item);
  };

  const listTechnologies = technologies.map(technology => {
    const key = technology.toString();
    return (
      <ol key={key} className="item">
        {technology}
        <button onClick={() => removeItem(key)} className="button">
          <DeleteIcon />
        </button>
      </ol>
    );
  });

  return <ul className="list">{listTechnologies}</ul>;
};

export default TechList;
