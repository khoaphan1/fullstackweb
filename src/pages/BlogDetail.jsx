import React from 'react'
import Header from '../components/Header/Header';
import Footer from "../components/Footer";
import styled from "styled-components";
import SliderNav from "../components/SliderNav";
import BlogDescription from "../components/BlogDescription/BlogDescription";
import Comment from '../components/Comment/Comment';
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethod";

const Container = styled.div`
  margin: auto;
  padding: 0 20px;
  background-color: #fff;
`;


const BlogDetail = () => {

  const location = useLocation();
  const id = location.pathname.split("/")[2];
  console.log(id)
  const [blog, setBlog] = useState({});

  useEffect(() => {
    const getBlog = async () => {
      try {
        const res = await publicRequest.get("/blog/" + id);
        setBlog(res.data);
      } catch {}
    };
    getBlog();
  }, [id]);

  return (
    <div>
        <Header/>
        <SliderNav/>
        <Container>
            <BlogDescription blog={blog}/>
            <Comment type="blog"/>
        </Container>
        <Footer/>
    </div>
  )
}

export default BlogDetail