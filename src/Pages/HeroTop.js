import React from "react";
import styled from "styled-components";
import img1 from "./../image/img1.png";
import img2 from "./../image/img2.png";
import '.././index.css'
const HeroTop = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Left>
            <Wrap>
              <Heading>
                <div>
                  Bringing ease and tech into the restaurant business in{" "}
                  <span>Africa</span>
                </div>
              </Heading>
              <Caption>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                et purus a odio finibus bibendum amet leo.
              </Caption>
              <CTA>
                <Subscribe>Subcribe</Subscribe>
                <Learn>Learn More</Learn>
              </CTA>
              <Stats>
                <User>
                  <div>1287+</div>
                  <span>Users</span>
                </User>
                <Customer>
                  <div>5786+</div>
                  <span>Customer served</span>
                </Customer>
              </Stats>
            </Wrap>
          </Left>
          <Right>
            <ImageWrap>
              {/* <Img2Wrap> */}
              <Img2 src={img2} />
              {/* </Img2Wrap> */}
              {/* <Img1Wrap> */}
              <Img1 src={img1} />
              {/* </Img1Wrap> */}
            </ImageWrap>
          </Right>
        </Wrapper>
      </Container>
    </>
  );
};

export default HeroTop;

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const Left = styled.div`
  flex: 1;
`;

const Wrap = styled.div`
  margin-left: 100px;
  margin-top: 141px;
`;
const Heading = styled.div`
  font-weight: bold;
  font-size: 48px;
  display: flex;
  width: 540px;
  height: 145px;

  line-height: 50px;
  div {
    span {
      color: #ffc529;
      letter-spacing: 15px;
    }
  }
`;
const Caption = styled.div`
  margin-top: 20px;
  width: 430px;
  line-height: 22px;
`;
const CTA = styled.div`
  display: flex;
  margin-top: 20px;
  font-size: 15px;
  font-weight: bold;
  font-family: "Roboto";
  align-items: center;
`;
const Subscribe = styled.div`
  width: 220px;
  height: 50px;
  background-color: #ffc529;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  transition: all 450ms;
  :hover {
    box-shadow: 0px 0px 6px 2px rgba(0, 0, 0, 0.25);
  }
`;
const Learn = styled.div`
  width: 165px;
  height: 50px;
  background-color: #fff;
  display: flex;
  align-items: center;
  border-radius: 4px;
  justify-content: center;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  margin-left: 30px;
  cursor: pointer;
  :hover {
    box-shadow: 1px 4px 4px 0px rgba(0, 0, 0, 0.25),
      -2px 6px 6px 0px rgba(0, 0, 0, 0.25);
  }
`;
const Stats = styled.div`
  height: 71px;
  display: flex;
  margin-top: 20px;
  width: 300px;
  align-items: center;
  justify-content: space-between;
`;
const User = styled.div`
  height: 100%;
  width: 106px;
  color: #829d55;
  div {
    font-weight: 700;
    font-size: 40px;
  }
`;
const Customer = styled.div`
  height: 100%;
  width: 140px;
  color: #ffc529;
  div {
    font-weight: 700;
    font-size: 40px;
  }
`;

const Right = styled.div`
  flex: 1;
`;

const ImageWrap = styled.div`
  width: 100%;
  display: flex;
  position: relative;
`;

const Img1 = styled.img`
  width: 473px;
  height: 578px;
  left: 202px;
  top: 100px;
  position: absolute;
`;

const Img2 = styled.img`
  width: 230px;
  height: 215px;
  position: absolute;
  bottom: -700px;
`;
