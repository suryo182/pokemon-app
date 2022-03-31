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
