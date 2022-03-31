import React, { useEffect, useState } from 'react';
import { gql } from '@apollo/client';
import { FavoriteWrapper, FavoriteList } from './styles';
import Card from '../../components/Card';
import client from '../../apollo-client';

function Favorite({ data }) {
  const [list, setList] = useState();
  const pokemons = data.pokemons.results;
  const allPokemonNames = pokemons.map((pokemon) => pokemon.name);

  useEffect(() => {
    if (allPokemonNames.length > 1) {
      allPokemonNames.map((name) => {
        if (localStorage.getItem(name)) {
          setList((prevState) => ({
            ...prevState,
            [name]: localStorage.getItem(name),
          }));
        }
      });
    }
  }, [allPokemonNames.length]);

  return (
    <FavoriteWrapper>
      <FavoriteList>
        {list &&
          pokemons.length > 1 &&
          pokemons.map((pokemon) => {
            if (list[pokemon.name]) {
              return <Card pokemon={pokemon} key={pokemon.id} />;
            }
          })}
      </FavoriteList>
    </FavoriteWrapper>
  );
}

export default Favorite;

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query Pokemons {
        pokemons {
          results {
            id
            url
            image
            name
          }
        }
      }
    `,
  });

  return {
    props: {
      data,
    },
  };
}
