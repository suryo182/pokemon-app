import styled from '@emotion/styled';

export const DetailWrapper = styled.div`
  padding: 1.4rem 1.2rem;
`;

export const PokemonTitle = styled.h2`
  font-family: Karla, sans-serif;
  font-size: 28px;
  font-weight: 400;
  margin-bottom: 24px;
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

export const StatsWrapper = styled.div``;

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
  background: ${(props) => (props.pokemonType === 'grass' ? '#73D677' : props.pokemonType === 'fire' ? '#B23327' : '#fff')};
  box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.18);
  border-radius: 11px;
  border: none;
  cursor: default;
`;
