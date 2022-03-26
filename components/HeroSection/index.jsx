import Image from 'next/image';
import React from 'react';
import {
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
      <HeroContentWrapper>
        <HeroTitle>
          <strong>Find</strong> all your favorite <strong>Pokemon</strong>
        </HeroTitle>
        <HeroDescription>
          You can know the type of Pokemon, its strengths, disadvantages and
          abilities
        </HeroDescription>
        <CtaButton>See All Pokemons</CtaButton>
      </HeroContentWrapper>
      <HeroImageWrapper>
        <Image
          width={793}
          height={680}
          alt="hero illustration"
          src="/img/hero-img.svg"
        />
      </HeroImageWrapper>
    </HeroWrapper>
  );
}

export default HeroSection;
