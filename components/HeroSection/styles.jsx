import styled from '@emotion/styled';

export const HeroWrapper = styled.section`
  position: relative;
  display: grid;
  margin-top: 80px;
  padding: 1.4rem 0;
  height: max-content;
  background: linear-gradient(180deg, #f5db13 0%, #f2b807 100%);

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
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
  font-size: 48px;
  color: #333;
`;
export const HeroDescription = styled.h2`
  font-family: Karla, sans-serif;
  font-weight: 400;
  margin-bottom: 0.8rem;
  text-align: center;
  font-size: 28px;
  color: #333;
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
