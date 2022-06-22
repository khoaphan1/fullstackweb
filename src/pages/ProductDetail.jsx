import React from 'react'
import Header from '../components/Header/Header';
import Footer from "../components/Footer";
import styled from "styled-components";
import ProductDetailMain from '../components/ProductDetailMain/ProductDetailMain';
import Comment from '../components/Comment/Comment';
import { EmojiEventsOutlined, FlightTakeoff, Security, ThreeSixtyRounded } from '@material-ui/icons';
import { tableth } from "../reponsive";
import { useLocation } from "react-router-dom";
import { useEffect, useState, useLayoutEffect } from "react";
import axios from "axios";
import { publicRequest } from "../requestMethod";

const Container = styled.div`
  background-color: white;
`;

const List = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 80px;
  ${tableth({ padding: "0 20px" })}
`;

const Item = styled.div`
  padding: 20px 60px;
  border: 1px solid #ccc;
  text-align: center;
  ${tableth({ width: "100%", marginBottom: "20px" })}
`;

const ItemText = styled.div`
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 3.2px;
    margin: 0;
    font-weight: 700;
    line-height: 1.2;
    color: #000;
`;


const ProductDetail = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  console.log(id)
  const [product, setProduct] = useState({});
  console.log("http://localhost:5000/api/product/find/" + id);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/product/find/" + id);
        console.log(res);
        setProduct(res.data);
      } catch {}
    };
    getProduct();
  }, [id]);
  return (
    <div>
      <Header/>
      <Container>
        <ProductDetailMain product={product}/>
        <List>
          <Item>
            <FlightTakeoff style={{ fill: "#f7525a", fontSize: "50px" }}/>
            <ItemText>WORLDWIDE SHIPPING</ItemText>
          </Item>
          <Item>
            <ThreeSixtyRounded style={{ fill: "#f7525a", fontSize: "50px" }}/>
            <ItemText>FREE 60-DAY RETURNS</ItemText>
          </Item>
          <Item>
            <EmojiEventsOutlined style={{ fill: "#f7525a", fontSize: "50px" }}/>
            <ItemText>24 MONTH WARRANTY</ItemText>
          </Item>
          <Item>
            <Security style={{ fill: "#f7525a", fontSize: "50px" }}/>
            <ItemText>100% SECRUE CHECKOUT</ItemText>
          </Item>
        </List>
        <Comment type="product"/>
      </Container>
      <Footer/>
    </div>
  )
}


export default ProductDetail