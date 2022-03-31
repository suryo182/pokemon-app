import request from 'graphql-request';
import Image from 'next/image';
import React from 'react';
import { PokemonImageWrapper } from '../../components/Card/styles';
import {
  ButtonCatch,
  ContentWrapper,
  DetailWrapper,
  PokemonTitle,
  StatsBlock,
  StatsLabel,
  StatsTab,
  StatsText,
  StatsTitle,
  StatsWrapper,
  TabTitle,
  TypeName,
  TypesWrapper,
} from './styles';

function PokemonDetail({ pokemon, allPokemons }) {
  const pokemonName = pokemon.pokemon.name;
  const { pokemons } = allPokemons;
  const currentPokemonImage =
    pokemons.results.length > 0 &&
    pokemons.results.find((pokemon) => pokemon.name === pokemonName).image;

  const handleButtonCatch = () => {
    if (Math.random() < 0.5) {
      alert('Congratulation, you catch a pokemon!');
      if (localStorage.getItem(pokemonName)) {
        localStorage.setItem(
          pokemonName,
          localStorage.getItem(pokemonName) + 1
        );
      } else {
        localStorage.setItem(pokemonName, 1);
      }
    } else {
      alert('Sorry, you failed to catch a pokemon!');
    }
  };

  return (
    <DetailWrapper>
      <PokemonTitle>{pokemonName}</PokemonTitle>
      <StatsTab>
        <TabTitle>Stats</TabTitle>
      </StatsTab>
      <ContentWrapper>
        <StatsWrapper>
          <StatsTitle>Biodata</StatsTitle>
          <StatsBlock>
            <StatsLabel>Name: </StatsLabel>
            <StatsText>{pokemon.pokemon.name}</StatsText>
          </StatsBlock>
          <StatsBlock>
            <StatsLabel>Forms: </StatsLabel>
            <StatsText>{pokemon.pokemon.forms.name}</StatsText>
          </StatsBlock>
          <StatsBlock>
            <StatsLabel>Height: </StatsLabel>
            <StatsText>{pokemon.pokemon.height} decimeters</StatsText>
          </StatsBlock>
          <StatsBlock>
            <StatsLabel>Weight: </StatsLabel>
            <StatsText>{pokemon.pokemon.weight} hectogram</StatsText>
          </StatsBlock>
          <StatsBlock>
            <StatsTitle>Types</StatsTitle>
            <TypesWrapper>
              {pokemon.pokemon.types.length > 0 &&
                pokemon.pokemon.types.map((item, index) => (
                  <TypeName pokemonType={item.type.name} key={index}>
                    {item.type.name}
                  </TypeName>
                ))}
            </TypesWrapper>
          </StatsBlock>
          <ButtonCatch onClick={handleButtonCatch}>Catch!</ButtonCatch>
        </StatsWrapper>
        <PokemonImageWrapper>
          {currentPokemonImage && (
            <Image
              src={currentPokemonImage}
              alt="pokemon"
              layout="fill"
              objectFit="cover"
            />
          )}
        </PokemonImageWrapper>
      </ContentWrapper>
    </DetailWrapper>
  );
}

export default PokemonDetail;

export async function getServerSideProps({ params }) {
  const url = 'https://graphql-pokeapi.vercel.app/api/graphql';
  const { name } = params;
  const variables = {
    name,
  };

  const getAllPokemons = `
      query Pokemons {
        pokemons {
          count
          next
          previous
          status
          message
          results {
            id
            url
            name
            image
          }
        }
      }
    `;

  const getPokemon = `
     query GetPokemon($name: String!){
      pokemon(name: $name) {
        id
        name
        height
        weight
        forms {
          name
        }
        base_experience
        abilities {
          ability {
            name
            url
          }
        }
        moves {
          move {
            name
          }
        }
        types {
          type {
            name
          }
        }
        message
        status
      }
    }
  `;

  const pokemon = await request(url, getPokemon, variables);

  const allPokemons = await request(url, getAllPokemons);

  return {
    props: {
      pokemon,
      allPokemons,
    },
  };
}
