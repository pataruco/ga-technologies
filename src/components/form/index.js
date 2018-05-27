import React from 'react';
import './style.css';

const Form = props => {
  return (
    <form onSubmit={props.onSubmit} className="form">
      <label htmlFor="technology" className="label">
        Technology:
      </label>
      <span className="border-wrapper">
        <input
          type="text"
          id="technology"
          name="technology"
          onChange={props.onChange}
          value={props.technology}
          className="input"
        />

        <span className="border" />
      </span>
      <input type="submit" value="enter" className="button-form" />
    </form>
  );
};

export default Form;
