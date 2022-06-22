import React from 'react'
import Header from '../components/Header/Header'
import Slider from '../components/Slider'
import Category from '../components/Category'
import Trending from '../components/Trending'
import Featured from '../components/Featured'
import Advertisement from '../components/Advertisement'
import Newlester from '../components/Newlester'
import Instagram from '../components/Instagram'
import Footer from '../components/Footer'
import TestSlider from '../components/TestSlider/TestSlider'
import styled from "styled-components";
import { tableth, mobilew } from "../reponsive";


const Container = styled.div`
  ${tableth({ display: "none" })}
  ${mobilew({ display: "none" })}
`;

const Home = () => {
  return (
    <div>
      <Header/>
      <Slider/>
      <Category/>
      <Trending/>
      <Container>
        <Advertisement/>
      </Container>
      <Featured/>
      <Newlester/>
      <Instagram/>
      <Footer/>
      {/* <TestSlider/>
      <Footer/> */}
    </div>
  )
}

export default Home