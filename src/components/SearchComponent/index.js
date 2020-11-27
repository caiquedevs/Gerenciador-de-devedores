import React from 'react';

import { Search } from './styled';
import searchIcon from '../../assets/search.svg';

const handleChange = (devedores) => {
  console.log('Search Devedores', devedores);
};

export default function SearchComponent({ devedores }) {
  return (
    <Search>
      <img src={searchIcon} alt="search icon" />
      <input
        placeholder="Procure por um devedor"
        type="search"
        name="search"
        id="search"
        onChange={() => handleChange(devedores)}
      />
    </Search>
  );
}
