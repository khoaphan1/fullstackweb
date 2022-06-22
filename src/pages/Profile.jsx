import React from 'react'
import Header from '../components/Header/Header';
import Footer from "../components/Footer";
import styled from "styled-components";
import FormProfile from '../components/FormProfile/FormProfile';

const Container = styled.div`
  padding: 90px 0;
`;

const Profile = () => {
  return (
    <div>
      <Header/>
      <Container>
        <FormProfile/>
      </Container>
      <Footer/>
    </div>
  )
}

export default Profile