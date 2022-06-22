import React from "react";
import styled from "styled-components";
import ProductItem from "./ProductItem/ProductItem";
import { tabletw } from "../reponsive";
import axios from "axios";

import { useEffect, useState } from "react";

const Container = styled.div``;

const Wrapper = styled.div`
  margin: 30px 30px;
  ${tabletw({ margin: "0px" })}
`;

const ListProduct = styled.div`
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ListProductInShop = () => {
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

  const [page, setPage] = useState(2);
  const [totalItem, setTotalItem] = useState(8);
  
  return (
    <Container>
      <Wrapper>
        <ListProduct>
          {/* {products.map((item) => (
            <ProductItem item={item} key={item._id} />
          ))} */}
          {products.map((item, index) => {
            if(index >= (page - 1)*totalItem && index < (page)*totalItem){
              return  <ProductItem item={item} key={item._id} />
            }
          })}
        </ListProduct>
      </Wrapper>
    </Container>
  );
};

export default ListProductInShop;
