import React from 'react';

const Form = props => {
  return (
    <form onSubmit={props.onSubmit} className="form">
      <label htmlFor="technology" className="label">
        Technology:
      </label>
      <input
        type="text"
        id="technology"
        name="technology"
        onChange={props.onChange}
        value={props.technology}
        className="input"
      />
      <input type="submit" value="enter" className="button-form" />
    </form>
  );
};

export default Form;
