import React from 'react'
import styled from "styled-components";
import ProductItem from './ProductItem/ProductItem';
import { tabletw } from "../reponsive";
import axios from "axios";

import { useEffect, useState } from "react";


const Container = styled.div`

`;

const Wrapper = styled.div`
  margin: 30px 30px;
  ${tabletw({ margin: "0px"})}
`;

const TopText = styled.p`
  font-size: 30px;
  margin: auto;
  width: 100%;
  text-align: center;
  text-transform: uppercase;
  font-weight: 600;
`;

const ListProduct = styled.div`
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Button = styled.div`
  padding : 15px 10px;
  background-color: #000;
  color: #fff;
  width: 150px;
  text-align: center;
  margin: 30px auto;
  font-weight: 700;
  cursor: pointer;
`;

const Trending = () => {

  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/product");
        console.log(res.data);
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, []);

  return (
    <Container>
      <Wrapper>
        <TopText>
          Trending
        </TopText>
        <ListProduct>
          {products.map((item) => (
            <ProductItem item={item} key={item._id} dataItem={item._id} />
          ))}
        </ListProduct>
        <Button>ALL PRODUCT</Button>
      </Wrapper>
    </Container>
  )
}

export default Trending