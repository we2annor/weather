import React, { useState } from "react";

interface Props {
  onFilterSubmit: {
    (minTemp: number, maxTemp: number): void;
  };
}
const SearchBar: React.FC<Props> = ({ onFilterSubmit }) => {
  const [minTemp, setMinTemp] = useState(0);
  const [maxTemp, setMaxTemp] = useState(0);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    name === "minTemp" ? setMinTemp(Number(value)) : setMaxTemp(Number(value));
  };

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onFilterSubmit(minTemp, maxTemp);
  };

  return (
    <div className='search-bar ui segment'>
      <form onSubmit={(e) => onFormSubmit(e)} className='ui form'>
        <div className='field'>
          <label>Search</label>
          <input
            placeholder='Min Temperature'
            className='ui input'
            type='text'
            name='minTemp'
            value={minTemp}
            onChange={onInputChange}
          />
        </div>
        <div className='field'>
          <input
            placeholder='Max Temperature'
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
