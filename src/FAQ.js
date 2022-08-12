import React from "react";
import styled from "styled-components";
import data from "./faq.json";

const FAQ = () => {
  return (
    <>
      <Container>
        <WRapper>
          <Head>Frequently Asked Questions</Head>
          <Wrap>
            {data.map(({ id, title, answer }) => (
              <Card key={id}>
                <Title>{title}</Title>
                <Answer>{answer}</Answer>
              </Card>
            ))}
          </Wrap>
        </WRapper>
      </Container>
    </>
  );
};

export default FAQ;
const Container = styled.div`
  width: 100%;
  min-height: 80vh;
  height: 100%;
`;
const WRapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Head = styled.div`
  font-weight: 700;
  font-size: 36px;
  line-height: 28px;
  margin-top: 50px;
`;
const Wrap = styled.div`
  width: 87%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 70px;
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 506px;
  margin: 10px 15px;
`;
const Title = styled.div`
  font-weight: 700;
  font-size: 18px;
  margin: 10px 0px;
`;
const Answer = styled.div`
  font-weight: 300;
  font-size: 16px;
  font-family: "Roboto";
  line-height: 28px;
`;
