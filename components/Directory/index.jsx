import Image from 'next/image';
import React from 'react';
import {
  DirectoryItem,
  DirectoryList,
  DirectorySearch,
  DirectoryTitle,
  DirectoryWrapper,
  PokemonImageWrapper,
  PokemonInfoWrapper,
  PokemonTitle,
  PokemonType,
  TypeWrapper,
} from './styles';

function Directory() {
  return (
    <DirectoryWrapper>
      <DirectoryTitle>
        100+ <strong>Pokemons</strong> for you to choose your favorite
      </DirectoryTitle>
      <DirectorySearch placeholder="Search..." />
      <DirectoryList>
        <DirectoryItem>
          <PokemonInfoWrapper>
            <PokemonTitle>Mudkip</PokemonTitle>
            <TypeWrapper>
              <PokemonType>Poison</PokemonType>
              <PokemonType>Grass</PokemonType>
            </TypeWrapper>
          </PokemonInfoWrapper>
          <PokemonImageWrapper>
            <Image src="/img/sample.png" alt="pokemon" layout="fill" />
          </PokemonImageWrapper>
        </DirectoryItem>
      </DirectoryList>
    </DirectoryWrapper>
  );
}

export default Directory;
