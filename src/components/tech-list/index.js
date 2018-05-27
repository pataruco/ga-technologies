import React from 'react';
import DeleteIcon from '../delete-icon';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
import './style.css';

const TechList = props => {
  const { deleteTechnology, technologies } = props;
  let toDelete = false;

  const removeItem = item => {
    toDelete = true;
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
