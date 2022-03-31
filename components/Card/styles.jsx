import styled from '@emotion/styled';

export const CardWrapper = styled.div`
  padding: 0.8rem 0.4rem;
  border-radius: 8px;
  display: flex;
  width: 100%;
  height: 175px;
  transition: 0.3s all ease;

  &:hover {
    box-shadow: 4px 4px 4px 0px #2121211a;
  }
`;

export const PokemonInfoWrapper = styled.div`
  width: max-content;
`;

export const PokemonImageWrapper = styled.div`
  flex-grow: 1;
  position: relative;
`;

export const PokemonTitle = styled.h5`
  font-family: Karla, sans-serif;
  margin-bottom: 12px;
  font-size: 18px;
  font-weight: 700;
  color: #212121;
`;

export const OwnedTitle = styled.span`
  display: block;
  font-family: Karla, sans-serif;
  margin-bottom: 12px;
  font-size: 14px;
  font-weight: 7400;
  color: #212121;
`;

export const TypeWrapper = styled.div`
  display: flex;
  column-gap: 12px;
`;

export const PokemonType = styled.span`
  font-family: Karla, sans-serif;
  font-size: 12px;
  font-weight: 400;
  display: block;
  padding: 0.2rem 0.4rem;
  background: #73d677;
  box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.18);
  border-radius: 11px;
  border: none;
`;

export const DetailBtn = styled.button`
  font-family: Karla, sans-serif;
  font-size: 12px;
  font-weight: 400;
  padding: 0.2rem .4rem;
  display: block;
  color: #212121;
  background: #f2cb07;
  box-shadow: inset 0px -9px 0px rgba(0, 0, 0, 0.18);
  border-radius: 11px;
  border: none;
  cursor: pointer;
`;
