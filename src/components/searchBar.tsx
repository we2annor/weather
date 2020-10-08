import React, { useState } from "react";

interface Props {
  onTermSubmit: (minTemp: string, maxTemp: string) => void;
}

const SearchBar: React.FC<Props> = ({ onTermSubmit }) => {
  const [minTemp, setMinTemp] = useState("");
  const [maxTemp, setMaxTemp] = useState("");

  const onInputChange = (e) => {
    const { value, name } = e.target;
    name === "minTemp" ? setMinTemp(value) : setMaxTemp(value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    onTermSubmit(minTemp, maxTemp);
  };

  return (
    <div className='search-bar ui segment'>
      <form onSubmit={(e) => onFormSubmit(e)} className='ui form'>
        <div className='field'>
          <label>Search Min Temperature</label>
          <input
            className='ui input'
            type='text'
            name='minTemp'
            value={minTemp}
            onChange={onInputChange}
          />
        </div>
        <div className='field'>
          <label>Search Max Tempearature</label>
          <input
            type='text'
            name='maxTemp'
            value={maxTemp}
            onChange={onInputChange}
          />
        </div>
        <input type='submit' value='Submit' />
      </form>
    </div>
  );
};
export default SearchBar;
