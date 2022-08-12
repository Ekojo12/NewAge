import React from "react";
import HeroTop from "./HeroTop";
import HeroBottom from "./HeroBottom";
import styled from "styled-components";

const Hero = () => {
  return (
    <>
      <Container>
        <HeroTop />
        <HeroBottom />
      </Container>
    </>
  );
};

export default Hero;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
