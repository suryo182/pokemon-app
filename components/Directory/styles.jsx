import styled from '@emotion/styled';

export const DirectoryWrapper = styled.div`
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

export const DirectoryTitle = styled.h2`
  font-family: Karla, sans-serif;
  font-weight: 400;
  text-align: center;
  font-size: 28px;
  color: #333;
  margin-bottom: 24px;
`;

export const DirectorySearch = styled.input`
  width: 100%;
  margin-bottom: 80px;
  padding: 16px 30px;
  background: #f2f2f2;
  box-shadow: 4px 4px 16px rgba(1, 28, 64, 0.2);
  border-radius: 40px;
  border: none;
  outline: none;
`;

export const DirectoryList = styled.div`
  display: grid;
  justify-content: center;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 12px;
`;

