import React from 'react';

const Form = props => {
  return (
    <form onSubmit={props.onSubmit}>
      <label htmlFor="technology">
        Technology:
        <input
          type="text"
          id="technology"
          name="technology"
          onChange={props.onChange}
          value={props.technology}
        />
      </label>
      <input type="submit" value="enter" />
    </form>
  );
};

export default Form;
