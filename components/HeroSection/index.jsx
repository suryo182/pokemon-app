import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {
  Container,
  CtaButton,
  HeroContentWrapper,
  HeroDescription,
  HeroImageWrapper,
  HeroTitle,
  HeroWrapper,
} from './styles';

function HeroSection() {
  return (
    <HeroWrapper>
      <Container>
        <HeroContentWrapper>
          <HeroTitle>
            <strong>Find</strong> all your favorite <strong>Pokemon</strong>
          </HeroTitle>
          <HeroDescription>
            You can know the type of Pokemon, its strengths, disadvantages and
            abilities
          </HeroDescription>
          <Link href="#directory">
            <CtaButton>See All Pokemons</CtaButton>
          </Link>
        </HeroContentWrapper>
        <HeroImageWrapper>
          <Image
            width={793}
            height={680}
            alt="hero illustration"
            src="/img/hero-img.svg"
          />
        </HeroImageWrapper>
      </Container>
    </HeroWrapper>
  );
}

export default HeroSection;
