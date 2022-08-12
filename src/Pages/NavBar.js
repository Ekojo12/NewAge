import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Logo>
            <div>NewAge</div> <span>Restaurant</span>
          </Logo>
          <Navigation>
            <NavWrap>
              <Home>Home</Home>
              <Subscribe>Subscribe</Subscribe>
              <Reviews>Reviews</Reviews>
              <FAQ>FAQ</FAQ>
            </NavWrap>
            <Contact>+23480000800</Contact>
          </Navigation>
        </Wrapper>
      </Container>
    </>
  );
};

export default Navbar;

const Container = styled.div`
  width: 100%;
  height: 80px;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled.div`
  margin-left: 100px;
  display: flex;
  width: 350px;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
  font-size: 36px;
  span {
    color: #ffc529;
  }
`;
const Navigation = styled.div`
  width: 600px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 70px;
`;
const NavWrap = styled.div`
  display: flex;
  width: 310px;
  justify-content: space-between;
  color: #ffc529;
`;
const Home = styled.div`
  font-family: "Roboto";
  font-size: 15px;
  cursor: pointer;
  position: relative;
  ::before {
    content: " ";
    position: absolute;
    bottom: -1px;
    left: 0px;
    height: 2px;
    width: 100%;
    background-color: grey;
    transform: scaleX(1);
    transform-origin: left;
    transition: transform all 750ms;
    display: none;
  }
  :hover {
    ::before {
      display: block;
    }
  }
`;

const Subscribe = styled(Home)``;
const Reviews = styled(Home)``;
const FAQ = styled(Home)``;

const Contact = styled.div`
  width: 180px;
  border-radius: 4px;
  height: 40px;
  background-color: #ffc529;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
`;
