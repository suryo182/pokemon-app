import React from 'react';
import Image from 'next/image';
import {
  CardWrapper,
  PokemonInfoWrapper,
  PokemonTitle,
  PokemonImageWrapper,
  PokemonType,
  TypeWrapper,
  DirectoryItemWrapper,
} from './styles';
import Link from 'next/link';

function Card({ pokemon }) {
  return (
    <Link href={`detail/${pokemon.name}`}>
      <CardWrapper>
        <PokemonInfoWrapper>
          <PokemonTitle>{pokemon.name}</PokemonTitle>
          {/* <TypeWrapper>
                  <PokemonType>Poison</PokemonType>
                  <PokemonType>Grass</PokemonType>
                </TypeWrapper> */}
        </PokemonInfoWrapper>
        <PokemonImageWrapper>
          <Image
            src={pokemon.image}
            alt="pokemon"
            layout="fill"
            objectFit="contain"
          />
        </PokemonImageWrapper>
      </CardWrapper>
    </Link>
  );
}

export default Card;
