import React from 'react'
import Header from '../components/Header/Header';
import Footer from "../components/Footer";
import styled from "styled-components";
import CheckoutForm from '../components/CheckoutForm/CheckoutForm';

const Container = styled.div`
  background-color: white;
`;

const Checkout = () => {
  return (
    <div>
      <Header/>
      <Container>
        <CheckoutForm/>
      </Container>
      <Footer/>
    </div>
  )
}

export default Checkout