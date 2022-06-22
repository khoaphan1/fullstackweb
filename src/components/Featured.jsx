import React from 'react'
import styled from "styled-components";
import ProductRating from './ProductRating/ProductRating';
import { tabletw } from "../reponsive";


const Container = styled.div`

`;

const Wrapper = styled.div`
  margin: 40px;
`;

const ListProduct = styled.div`
  display: flex;
  justify-content: space-between;
  ${tabletw({ flexWrap: "wrap" })}
`;

const Featured = () => {
  return (
    <Container>
      <Wrapper>
        <ListProduct>
          <ProductRating/>
          <ProductRating/>
          <ProductRating/>
        </ListProduct>
      </Wrapper>
    </Container>
  )
}

export default Featured