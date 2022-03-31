import styled from '@emotion/styled';

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #f5db13;
  box-shadow: 0px 4px 16px rgba(1, 28, 64, 0.2);
  z-index: 10;
  width: 100%;
  height: 80px;
`;

export const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  height: 100%;
  align-items: center;
  margin: 0 auto;
  padding: 0 0.8rem;

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

export const ImageWrapper = styled.div`
  position: relative;
  width: 100px;
  height: 40px;
  cursor: pointer;
`;

export const NavMenuWrapper = styled.div`
  display: flex;
`;

export const NavMenuList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  column-gap: 8px;
`;

export const NavMenuItem = styled.li`
  font-family: Karla, sans-serif;
  font-weight: 400;
  font-size: 16px;
  border-bottom: 1px solid transparent;
  padding: 0.3rem 0.1rem;

  a {
    text-decoration: none;
    color: #333;
  }

  @media (min-width: 768px) {
    font-size: 18px;
  }

  &:hover {
    border-bottom: 1px solid #333;
    transition: 0.3s all ease;
  }
`;
