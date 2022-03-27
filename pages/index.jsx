import { gql } from '@apollo/client';
import client from '../apollo-client';
import Directory from '../components/Directory';
import HeroSection from '../components/HeroSection';

export default function Home({ data }) {
  const pokemons = data.pokemons.results;

  return (
    <>
      <HeroSection />
      <Directory pokemons={pokemons} />
    </>
  );
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
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
    `,
  });

  return {
    props: {
      data,
    },
  };
}
