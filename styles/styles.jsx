import styled from '@emotion/styled';

export const FavoriteWrapper = styled.div`
  background-color: #fff;
  margin: 0 auto;
  padding: 1.8rem 2rem;

  @media (min-width: 768px) {
    max-width: 768px;
  }

  @media (min-width: 1024px) {
    max-width: 1024px;
  }

  @media (min-width: 1280px) {
    max-width: 1280px;
  }
`;

export const FavoriteList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DetailWrapper = styled.div`
  padding: 1.4rem 1.2rem;
  margin: 0 auto;

  @media (min-width: 768px) {
    max-width: 768px;
  }

  @media (min-width: 1024px) {
    max-width: 1024px;
  }

  @media (min-width: 1280px) {
    max-width: 1280px;
  }
`;

export const PokemonTitle = styled.h2`
  font-family: Karla, sans-serif;
  font-size: 28px;
  font-weight: 400;
  margin-bottom: 24px;
`;

export const ContentWrapper = styled.div`
  display: flex;
`;

export const StatsTab = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const StatsTitle = styled.h5`
  font-family: Karla, sans-serif;
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 18px;
`;

export const StatsWrapper = styled.div`
  width: 50%;
`;

export const StatsBlock = styled.div`
  margin-bottom: 12px;
`;

export const TabTitle = styled.h5`
  font-size: 20px;
  font-weight: 400;
  font-family: Karla, sans-serif;
`;

export const StatsLabel = styled.span`
  font-family: Karla, sans-serif;
  font-size: 16px;
  display: block;
`;

export const StatsText = styled.p`
  font-family: Karla, sans-serif;
  font-size: 16px;
`;

export const TypesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

export const TypeName = styled.div`
  font-family: Karla, sans-serif;
  font-size: 14px;
  font-weight: 400;
  padding: 0.3rem 1.2rem;
  background: ${(props) =>
    (props.pokemonType === 'grass' || props.pokemonType === 'bug'
      ? '#73D677'
      : props.pokemonType === 'stile' ||
        props.pokemonType === 'dark' ||
        props.pokemonType === 'rock'
        ? '#A1A1A1'
        : props.pokemonType === 'ice' || props.pokemonType === 'water'
          ? '#A2CFF0'
          : props.pokemonType === 'fire' ||
        props.pokemonType === 'fighting' ||
        props.pokemonType === 'dragon'
            ? '#F76545'
            : props.pokemonType === 'normal' || props.pokemonType === 'ghost'
              ? '#76AADB'
              : props.pokemonType === 'poison' ||
        props.pokemonType === 'psychic' ||
        props.pokemonType === 'fairy' ||
        props.pokemonType === 'ghost'
                ? '#A974BC'
                : props.pokemonType === 'ground'
                  ? '#9B897B'
                    ? props.pokemonType === 'electric'
                    : '#F7C545'
                  : '')};
  box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.18);
  border-radius: 11px;
  border: none;
  cursor: default;
`;

export const ButtonCatch = styled.button`
  font-family: Karla, sans-serif;
  padding: 0.4rem 1.2rem;
  font-size: 20px;
  font-weight: 700;
  border-radius: 11px;
  box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.18);

  &:hover {
    cursor: pointer;
  }
`;
