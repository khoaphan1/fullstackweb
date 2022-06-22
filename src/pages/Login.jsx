import React from 'react'
import Header from '../components/Header/Header';
import Footer from "../components/Footer";
import styled from "styled-components";
import FormLogin from '../components/FormLogin/FormLogin';

const Container = styled.div`
  padding: 90px 0;
`;

const Login = () => {
  return (
    <div>
      <Header/>
      <Container>
        <FormLogin/>
      </Container>
      <Footer/>
    </div>
  )
}

export default Login