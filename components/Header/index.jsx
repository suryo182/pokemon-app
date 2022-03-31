import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {
  HeaderWrapper,
  ImageWrapper,
  NavMenuItem,
  NavMenuList,
  NavMenuWrapper,
  NavWrapper,
} from './styles';

function Header() {
  return (
    <HeaderWrapper>
      <NavWrapper>
        <Link href="/">
          <ImageWrapper>
            <Image
              src="/icon/pokemon-logo.svg"
              alt="app logo"
              layout="fill"
              objectFit="contain"
            />
          </ImageWrapper>
        </Link>

        <NavMenuWrapper>
          <NavMenuList>
            <NavMenuItem>
              <Link href="/">Home</Link>
            </NavMenuItem>
            <NavMenuItem>
              <Link href="/favorite">My Pokemon List</Link>
            </NavMenuItem>
          </NavMenuList>
        </NavMenuWrapper>
      </NavWrapper>
    </HeaderWrapper>
  );
}

export default Header;
