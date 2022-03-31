import styled from '@emotion/styled';

export const FooterWrapper = styled.footer`
  display: flex;
  width: 100%;
  padding: 1.4rem 1.2rem;
`;

export const FooterContent = styled.div`
  font-family: Karla, sans-serif;
  display: block;
  font-size: 14px;
  font-weight: 400;
  margin: 0 auto;
  width: 100%;

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
