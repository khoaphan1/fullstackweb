import React from 'react'
import Header from '../components/Header/Header';
import Footer from "../components/Footer";
import styled from "styled-components";
import FormRegister from '../components/FormRegister/FormRegister';

const Container = styled.div`
  padding: 90px 0;
`;

const Register = () => {
  return (
    <div>
      <Header/>
      <Container>
        <FormRegister/>
      </Container>
      <Footer/>
    </div>
  )
}

export default Register