import { Drafts, SendOutlined } from '@material-ui/icons';
import React from 'react'
import styled from "styled-components";
import { tableth, mobilew } from "../reponsive";

const Container = styled.div`
  margin: 40px 0;
`;

const Wrapper = styled.div`
    background-image: url(//cdn.shopify.com/s/files/1/0555/0912/3177/files/bg-newsletterV1.jpg?v=1648455001);
    background-size: cover;
    background-position: center;
    padding-top: 95px;
    padding-bottom: 80px;
    ${tableth({ paddingTop: "20px", paddingBottom: "25px"})}
`;

const Content = styled.div`
  text-align: center;
  margin: auto;
`;

const IconTop = styled.div`

`;

const Newtext = styled.p`
  font-size: 28px;
  color : #000;
  font-weight: 700;
`;

const NavText = styled.p`
  margin-top: 5px;
  color: #666;
  font-size: 14px;
`;

const Form = styled.form`
  position: relative;
  width: 70%;
  margin: 20px auto;
`;

const Input = styled.input`
    width: 100%;
    height: 45px;
    color: #868686;
    background: #fff;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    font-size: 15px;
    padding-left: 10px;
    &:focus{
      border: 1px solid #ddd;
      box-shadow: unset;
      outline: none;
    }
`;

const Button = styled.button`
    position: absolute;
    top: 1px;
    right: -12px;
    min-width: 45px;
    height: 47px;
    color: #fff;
    font-size: 21px;
    border-radius: 0 3px 3px 0;
    background: #111111;
    transition: color 0.25s,border-color 0.25s,background-color 0.25s,opacity 0.25s,width 0.25s ease 0s;
    &:hover{
      background: #f7525a;
      border: 1px solid #f7525a;
    }
`;




const Newlester = () => {
  return (
    <Container>
      <Wrapper>
        <Content>
          <IconTop>
            <Drafts style={{fontSize: "52px"}}/>
          </IconTop>
          <Newtext>
            Newsletter Signup
          </Newtext>
          <NavText>
            Join our list and get 15% off your first purchase!
          </NavText>
          <Form>
            <Input placeholder="Enter your email address">
            </Input>
            <Button>
              <SendOutlined style={{fontSize: "24px", fill: "#fff"}}/>
            </Button>
          </Form>
          
        </Content>
      </Wrapper>
    </Container>
  )
}

export default Newlester