import React from 'react'
import styled from "styled-components";
const Container = styled.div`
`;

const Wrapper = styled.div`
  padding: 40px 0;
  text-align: center;
`;

const Insname = styled.div`
  font-size: 34px;
  color: #000;
  font-weight: 700;
  margin: 20px 0;
  letter-spacing: 1px;
`;

const InsText = styled.div`
  font-size: 16px;
  color: #333;
  font-weight: 700;
  margin: 40px 0 50px;

`;

const ListItem = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Item = styled.div`
  width: 25%;
  overflow: hidden;
  
`;
const Insimg = styled.img`
  width: 100%;
  display: block;
  transition: all 0.8s linear 0s;
  cursor: pointer;

  &:hover{
    transform: scale(1.1);
  }
  
`;

const Instagram = () => {
  return (
    <Container>
      <Wrapper>
        <Insname>instagram.shop</Insname>
        <InsText>Follow us on Instagram</InsText>
        <ListItem>
          <Item>
            <Insimg src="https://cdn.shopify.com/s/files/1/0555/0912/3177/files/instagram1.jpg?v=4252299205655878494"/>
          </Item>
          <Item>
            <Insimg src="https://cdn.shopify.com/s/files/1/0555/0912/3177/files/instagram2.jpg?v=502079925524380748"/>
          </Item>
          <Item>
            <Insimg src="https://cdn.shopify.com/s/files/1/0555/0912/3177/files/instagram5.jpg?v=11926183090898802753"/>
          </Item>
          <Item>
            <Insimg src="https://cdn.shopify.com/s/files/1/0555/0912/3177/files/instagram3.jpg?v=4236005986795006140"/>
          </Item>
          <Item>
            <Insimg src="https://cdn.shopify.com/s/files/1/0555/0912/3177/files/instagram6.jpg?v=10842980627513564568"/>
          </Item>
          <Item>
            <Insimg src="https://cdn.shopify.com/s/files/1/0555/0912/3177/files/instagram4.jpg?v=8350292749012754679"/>
          </Item>
          <Item>
            <Insimg src="https://cdn.shopify.com/s/files/1/0555/0912/3177/files/instagram7.jpg?v=12473633250714202626"/>
          </Item>
          <Item>
            <Insimg src="https://cdn.shopify.com/s/files/1/0555/0912/3177/files/instagram6.jpg?v=10842980627513564568"/>
          </Item>
        </ListItem>
      </Wrapper>
    </Container>
  )
}

export default Instagram