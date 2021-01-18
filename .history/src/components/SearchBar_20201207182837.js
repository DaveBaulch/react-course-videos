import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState('');

  const onInputChange = (event) => {
    setTerm(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(term);
  };

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={onFormSubmit}>
        <div className="field">
          <label htmlFor="search">Video Search</label>
          <input
            id="search"
            type="text"
            value={term}
            onChange.onInputChange}
          ></input>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
