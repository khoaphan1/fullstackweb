import React from "react";
import styled from "styled-components";
import { Facebook, Instagram, Twitter, YouTube } from "@material-ui/icons";
import { tableth, mobilew } from "../reponsive";
const Container = styled.div``;

const Wrapper = styled.div`
  padding: 60px 30px 80px;
  background-color: #f5f5f5;
`;

const FooterMain = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const FooterLogo = styled.div`
  margin-top: 30px;
  width: 25%;
  ${tableth({ width: "50%" })}
  ${mobilew({ width: "100%" })}
`;

const Img = styled.img`
  width: 150px;
`;

const FooterLogoText = styled.div`
  font-size: 14px;
  font-weight: 400;
  margin-top: 24px;
  color: #000;
  width: 180px;
`;

const ListLogo = styled.div`
  margin-top: 24px;
  display: flex;
  width: 200px;
  justify-content: space-between;
`;

const FooterList = styled.div`
  margin-top: 30px;
  ${tableth({ width: "50%" })}
  ${mobilew({ width: "100%" })}
  width: 25%;
`;

const FooterTop = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #000;
  margin-bottom: 30px;
`;

const FooterItem = styled.div`
  margin: 15px 0;
  font-size: 15px;
  color: #000;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    color: #f7525a;
  }
`;

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <FooterMain>
          <FooterLogo>
            <Img src="https://cdn.shopify.com/s/files/1/0555/0912/3177/files/logo.png?v=1648723388"></Img>
            <FooterLogoText>
              Sophisticated simplicity for the independent mind.
            </FooterLogoText>
            <ListLogo>
              <Facebook />
              <Instagram />
              <YouTube />
              <Twitter />
            </ListLogo>
          </FooterLogo>
          <FooterList>
            <FooterTop>Help & Information</FooterTop>
            <FooterItem>About Usy</FooterItem>
            <FooterItem>Privacy Policy</FooterItem>
            <FooterItem>Terms & Conditions</FooterItem>
            <FooterItem>Products Return</FooterItem>
            <FooterItem>Wholesale Policy</FooterItem>
          </FooterList>
          <FooterList>
            <FooterTop>Quick Shop</FooterTop>
            <FooterItem>Pagination</FooterItem>
            <FooterItem>Terms & Conditions</FooterItem>
            <FooterItem>Contact Us</FooterItem>
            <FooterItem>Accessories</FooterItem>
            <FooterItem>Term of use</FooterItem>
          </FooterList>
          <FooterList>
            <FooterTop>Categories</FooterTop>
            <FooterItem>Accent Chairs</FooterItem>
            <FooterItem>Home Decor</FooterItem>
            <FooterItem>Bedroom Sets</FooterItem>
            <FooterItem>Living Room Chairs</FooterItem>
            <FooterItem>Modern Homes</FooterItem>
          </FooterList>
        </FooterMain>
      </Wrapper>
    </Container>
  );
};

export default Footer;
