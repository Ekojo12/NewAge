import React from "react";
import styled from "styled-components";
import pizza from "./../image/Pizza.png";
import user from "./../image/user.png";
const Testimonies = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Head>Testimonials </Head>
          <Card>
            <Imagewrap>
              <img src={user} />
            </Imagewrap>
            <Details>
              Waiters no longer wait, they supervise, and engage when
              neeccesary. My clients do not have to deal with feeding off energy
              from anyone else but themselves
            </Details>
            <Designation>Raddisson Blue Chief Chef</Designation>
          </Card>
          <Dots>
            <span>o</span>
            <span>o</span>
            <span>o</span>
          </Dots>
          <Pizza src={pizza} />
        </Wrapper>
      </Container>
    </>
  );
};

export default Testimonies;

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: #ffc529;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
const Head = styled.div`
  width: 100%;
  font-weight: 700;
  font-size: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  color: white;
`;
const Card = styled.div`
  width: 1140px;
  height: 325px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  margin-top: 50px;
`;
const Imagewrap = styled.div`
  border-radius: 50%;
  width: 80px;
  height: 80px;
  border: 1px solid;
  box-shadow: 0px 0px 5px 4px rgba(0, 0, 0, 0.4);
  margin: 20px 0px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`;
const Details = styled.div`
  font-family: "Roboto";
  font-weight: 300;
  font-size: 21px;
  line-height: 33px;
  text-align: center;
  width: 605px;
`;
const Designation = styled.div`
  margin-top: 20px;
  color: #ffc529;
  font-family: "Roboto";
  font-weight: 600;
  font-size: 15px;
`;
const Pizza = styled.img`
  position: absolute;
  right: 10px;
  bottom: -260px;
`;
const Dots = styled.div`
  display: flex;
  margin-top: 30px;
  color: white;
  font-weight: 700;
`;
