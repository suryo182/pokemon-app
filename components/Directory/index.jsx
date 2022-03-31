import React, { useState } from 'react';
import {
  DirectoryList,
  DirectorySearch,
  DirectoryTitle,
  DirectoryWrapper,
} from './styles';
import Card from '../Card';

function Directory({ pokemons }) {
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredPokemons = search
    ? pokemons.filter((el) => {
        const clonedElem = { ...el };
        return clonedElem.name.toLowerCase().includes(search.toLowerCase());
      })
    : pokemons;

  return (
    <DirectoryWrapper id="directory">
      <DirectoryTitle>
        10+ <strong>Pokemons</strong> for you to choose your favorite
      </DirectoryTitle>
      <DirectorySearch placeholder="Search..." onChange={handleSearch} />
      <DirectoryList>
        {filteredPokemons.length > 0 &&
          filteredPokemons.map((pokemon) => (
            <Card pokemon={pokemon} key={pokemon.name} />
          ))}
      </DirectoryList>
    </DirectoryWrapper>
  );
}

export default Directory;
