import React from 'react';
import {
  StatsBlock,
  StatsTitle,
  StatsWrapper,
  StatsLabel,
  StatsText,
  StatsTab,
  PokemonTitle,
  TabTitle,
  TypesWrapper,
  TypeName,
} from './styles';
import { DetailWrapper } from './styles';
import request from 'graphql-request';

function PokemonDetail({ data }) {
  console.log({ data });
  return (
    <DetailWrapper>
      <PokemonTitle>{data.name}</PokemonTitle>
      <StatsTab>
        <TabTitle>Stats</TabTitle>
      </StatsTab>
      <StatsWrapper>
        <StatsTitle>Biodata</StatsTitle>
        <StatsBlock>
          <StatsLabel>Name: </StatsLabel>
          <StatsText>{data.name}</StatsText>
        </StatsBlock>
        <StatsBlock>
          <StatsLabel>Forms: </StatsLabel>
          <StatsText>{data.forms.name}</StatsText>
        </StatsBlock>
        <StatsBlock>
          <StatsLabel>Height: </StatsLabel>
          <StatsText>{data.height} decimeters</StatsText>
        </StatsBlock>
        <StatsBlock>
          <StatsLabel>Weight: </StatsLabel>
          <StatsText>{data.weight} hectogram</StatsText>
        </StatsBlock>

        <StatsBlock>
          <StatsTitle>Types</StatsTitle>
          <TypesWrapper>
            {data.types.length > 0 &&
              data.types.map((item, index) => (
                <TypeName pokemonType={item.type.name} key={index}>
                  {item.type.name}
                </TypeName>
              ))}
          </TypesWrapper>
        </StatsBlock>
      </StatsWrapper>
    </DetailWrapper>
  );
}

export default PokemonDetail;

export async function getServerSideProps({ params }) {
  const { name } = params;
  const variables = {
    name,
  };

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

  const response = await request(
    'https://graphql-pokeapi.vercel.app/api/graphql',
    getPokemon,
    variables
  );

  const data = response.pokemon;

  return {
    props: {
      data,
    },
  };
}
