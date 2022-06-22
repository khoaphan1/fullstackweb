import React from 'react'
import Header from '../components/Header/Header';
import Footer from "../components/Footer";
import styled from "styled-components";
import Table from '../components/Table/Table';
import { mobileh, mobilew } from "../reponsive";


const Container = styled.div`
  padding: 0 80px;
  background-color: #fff;
  margin-top: 90px;
  ${mobileh({ padding: "0 10px" })}
  ${mobilew({ padding: "0 10px" })}
`;

const Cart = () => {
  return (
    <div>
      <Header/>
      <Container>
        <Table/>
      </Container>
      <Footer/>
    </div>
  )
}

export default Cart