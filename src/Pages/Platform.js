import React from "react";
import styled from "styled-components";
import { MdDoubleArrow } from "react-icons/md";
import ipad from "./../image/ipadpro.png";
const Platform = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Left>
            <Head>
              SAAS platform integrated with pure outstanding robotic technology
            </Head>
            <Caption>
              Wow your customers with your interest in evolution and flawless
              service delivery
            </Caption>
            <Details>
              <div>See Details</div>
              <MdDoubleArrow />
            </Details>
            <Subscribe>
              <div>Subscribe</div>
              <MdDoubleArrow />
            </Subscribe>
          </Left>
          <Right>
            <Ipad src={ipad} />
          </Right>
        </Wrapper>
      </Container>
    </>
  );
};

export default Platform;

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 165px);
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  margin-left: 100px;
  margin-top: 90px;
`;
const Head = styled.div`
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  width: 464px;
`;
const Caption = styled.div`
  margin-top: 20px;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  width: 429px;
`;
const Details = styled.div`
  width: 165px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffc529;
  border: none;
  border-radius: 4px;
  margin-top: 20px;
  color: white;
  div {
    margin-right: 5px;
    font-family: "Roboto";
    font-weight: 700;
    font-size: 15px;
  }
  cursor: pointer;
  transition: all 450ms;
  :hover {
    box-shadow: 0px 0px 6px 2px rgba(0, 0, 0, 0.25);
  }
`;
const Subscribe = styled.div`
  width: 230px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffc529;
  border: none;
  border-radius: 4px;
  margin-top: 20px;
  color: white;
  div {
    font-family: "Roboto";
    font-weight: 700;
    font-size: 15px;
    margin-right: 5px;
  }
  cursor: pointer;
  transition: all 450ms;
  :hover {
    box-shadow: 0px 0px 6px 2px rgba(0, 0, 0, 0.25);
  }
`;
const Right = styled.div`
  width: 550px;
  height: 450px;
  margin-right: 100px;
`;
const Ipad = styled.img`
  width: 100%;
  height: 100%;
`;
