import { ChevronRight } from '@material-ui/icons';
import React from 'react'
import styled from "styled-components";

const Container = styled.div`
  margin-top: 90px;
`;

const Wrapper = styled.div`
    background-image: url(//cdn.shopify.com/s/files/1/0555/0912/3177/files/bg_page.jpg?v=1648866644);
    background-position: center;
    background-size: cover;
    padding-top: 30px;
    text-align: center!important;
`;


const Title = styled.h2`
    font-size: 40px;
    font-weight: 700;
    letter-spacing: 2px;
    color: #fff;
`;


const TextNav = styled.div`
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    padding: 6px 0 40px;
    display: flex;
    align-items: center;
    margin: auto;
    justify-content: center;
`;



const SliderNav = () => {
  return (
    <Container>
        <Wrapper>
            <Title>
                Products
            </Title>
            <TextNav>
                Home <ChevronRight style={{ fill: "#fff" }}/> Products
            </TextNav>
        </Wrapper>
    </Container>
  )
}

export default SliderNav