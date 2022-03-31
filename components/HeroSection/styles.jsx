import styled from '@emotion/styled';

export const HeroWrapper = styled.section`
  position: relative;
  display: grid;
  padding: 1.4rem 0;
  height: max-content;
  background: linear-gradient(180deg, #f5db13 0%, #f2b807 100%);
`;

export const Container = styled.div`
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

export const HeroContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroTitle = styled.h1`
  font-family: Karla, sans-serif;
  font-weight: 400;
  margin-bottom: 1rem;
  text-align: center;
  font-size: 32px;
  color: #333;

  @media (min-width: 768px) {
    font-size: 48px;
  }
`;
export const HeroDescription = styled.h2`
  font-family: Karla, sans-serif;
  font-weight: 400;
  margin-bottom: 0.8rem;
  text-align: center;
  font-size: 18px;
  color: #333;

  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

export const CtaButton = styled.button`
  padding: 17px 35px;
  font-size: 24px;
  font-weight: 700;
  width: max-content;
  cursor: pointer;
  background: #73d677;
  box-shadow: inset 0px -9px 0px rgba(0, 0, 0, 0.18);
  border-radius: 11px;
  outline: none;
  border: none;
  color: #333;
`;

export const HeroImageWrapper = styled.div``;
