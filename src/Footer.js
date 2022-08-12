import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Top>
            <a>Register</a>
            <a>Forum</a>
            <a>Affliate</a>
            <a>FAQ</a>
          </Top>
          <Bottom>© 2022. NewAge Restaurant. All rights reserved.</Bottom>
        </Wrapper>
      </Container>
    </>
  );
};

export default Footer;

const Container = styled.div`
  width: 100%;
  height: 260px;
  background-color: #2d303e;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
const Top = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    margin: 10px;
    cursor: pointer;
  }
`;
const Bottom = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
