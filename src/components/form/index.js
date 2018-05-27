import React from 'react';
import './style.css';

const Form = props => {
  return (
    <form onSubmit={props.onSubmit} className="form" id="form">
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
          autoComplete="off"
        />

        <span className="border" />
      </span>
      <button type="submit" className="button-form" id="form" data-text="enter">
        <span className="button-form-span">enter</span>
      </button>
    </form>
  );
};

export default Form;
