import React from 'react';
import DeleteIcon from '../delete-icon';
import './style.css';

const TechList = props => {
  const { deleteTechnology, technologies } = props;

  const removeItem = item => {
    deleteTechnology(item);
  };

  const listTechnologies = technologies.map((technology, index) => {
    const key = index;
    return (
      <li key={key} className="item animated slideInDown">
        {technology}
        <button onClick={() => removeItem(technology)} className="button">
          <DeleteIcon />
        </button>
      </li>
    );
  });

  return <ol className="list">{listTechnologies}</ol>;
};

export default TechList;
