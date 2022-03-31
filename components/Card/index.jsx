import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import {
  CardWrapper,
  DetailBtn,
  OwnedTitle,
  PokemonImageWrapper,
  PokemonInfoWrapper,
  PokemonTitle,
} from './styles';

function Card({ pokemon }) {
  const [owned, setOwned] = useState(0);

  useEffect(() => {
    if (pokemon) {
      if (localStorage.getItem(pokemon.name)) {
        setOwned(localStorage.getItem(pokemon.name));
      }
    }
  }, [pokemon]);

  return (
    <CardWrapper>
      <PokemonInfoWrapper>
        <PokemonTitle>{pokemon.name}</PokemonTitle>
        <OwnedTitle>Owned: {owned}</OwnedTitle>
        <Link href={`detail/${pokemon.name}`}>
          <DetailBtn>Details</DetailBtn>
        </Link>
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
  );
}

export default Card;
