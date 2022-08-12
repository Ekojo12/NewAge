import React from "react";
import styled from "styled-components";

const HeroBottom = () => {
  return (
    <>
      <Container>
        <Wrapper></Wrapper>
      </Container>
    </>
  );
};

export default HeroBottom;
const Container = styled.div`
  width: 100%;
  height: 165px;
  background-color: #2d303e;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
