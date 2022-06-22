import React from 'react'
import Header from '../components/Header/Header';
import Footer from "../components/Footer";
import styled from "styled-components";
import SliderNav from "../components/SliderNav";
import BlogItem from '../components/BlogItem/BlogItem';
import axios from "axios";

import { useEffect, useState } from "react";



const Container = styled.div`
  max-width: 1100px;
  margin: auto;
`;

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const getBlogs = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/blog");
        console.log(res.data);
        setBlogs(res.data);
      } catch (err) {}
    };
    getBlogs();
  }, []);
  return (
    <div>
      <Header/>
      <SliderNav />
      <Container>
        {blogs.map((item) => <BlogItem item={item} key={item._id}/>)}
        {/* <BlogItem/>
        <BlogItem/>
        <BlogItem/>
        <BlogItem/> */}
      </Container>
      <Footer/>
    </div>
  )
}

export default Blogs