'use client';
import { motion } from 'framer-motion';
import { styled } from 'styled-components';

export const Wrapper = styled.section``;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 7rem auto 0;
  max-width: 1440px;
  width: 90%;

  h2 {
    color: var(--link-color);
    font-size: 1.25rem;
    font-weight: 500;
    text-transform: uppercase;
    margin-top: 6.5rem;
  }

  @media (max-width: 768px) {
    margin-top: 5rem;

    h2 {
      font-size: 1rem;
      font-weight: 500;
      margin-top: 3.75rem;
    }
  }
`;

export const ImageContainer = styled.div`
  max-width: 85rem;
  margin: 0 auto;
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 0.75rem;

  img {
    object-fit: cover;
  }

  @media (max-width: 768px) {
    border-radius: 0.5rem;

    img {
      height: 23.75rem;
    }
  }
`;

export const ParallaxImages = styled.div`
  position: relative;
  max-width: 53.7rem;
  margin: 3rem auto 0;
`;

export const Div = styled(motion.div)`
  position: relative;
  height: 80vh;
  overflow: hidden;


  @media (max-width: 599px) {
    height: 23.75rem;
    flex-direction: column; /* stack on mobile */
  }
`;

export const LeftHalf = styled.div`
  width: 50%;
  height: 100%;

  @media (max-width: 599px) {
    display: none; /* hide empty half on mobile */
  }
`;

export const RightHalf = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100%;
  margin-left: auto;

  @media (max-width: 599px) {
    width: 100%;
    margin-left: 0;
  }
`;

// styled Curtain component
export const Curtain = styled(motion.div)`
  position: absolute;
  inset: 0; /* top:0; right:0; bottom:0; left:0; */
  width: 100%;
  height: 100%;
  background-image: url('/home/cover-vector.webp');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  align-items: center;
  color: #000;

  @media (max-width: 768px) {
    height: 30%;
    top: auto;
    bottom: 0;
  }
`;

export const HeroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-bottom: 2rem;
  margin-left: 0vw;

  h1 {
    font-size: 2.8em;
    font-weight: 500;
    color: #25418e;
  }

  h3 {
    font-size: 2em;
    // font-weight: 500;
    color: #25418e;
  }

  p {
    max-width: 41.75rem;
    color: #3594d2;
    font-size: 2em;
    font-weight: 600;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    gap: 0.5rem;
    padding-bottom: 0.5rem;
    margin-left: 0.5rem;
    h1 {
      font-size: 1.4rem;
      font-weight: 500;
    }

    p {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
`;

