import React from "react";
import styled from "styled-components";
import { Badge } from '@material-ui/core';
import { Search, LocalMallOutlined, FavoriteBorderSharp, PersonOutline, Dehaze } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { bigtabletw,mobilew,tableth } from "../reponsive";
import { useSelector } from "react-redux"




const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background-color: #fff;
  box-shadow: 0 2px 5px -2px rgb(0 0 0 / 10%);
`;

const Wrapper = styled.div`
  display: flex;
  padding: 30px 20px;
  justify-content: space-between;
  align-items: center;
  height: 30px;

`;

const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`

`;

const Image = styled.img`
  height: 30px;
  ${mobilew({ height: "20px" })}
  ${bigtabletw({ height: "20px" })}
`;

const Nav = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  ${tableth({ display: "none" })}
`;

const NavItem = styled.li`
  text-decoration: none;
  margin-left: 44px;
  font-size: 18px;
  font-weight: 700;
  color: #000;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: end;
`;

const MenuItem = styled.div`
  margin-left: 25px;
  ${mobilew({ marginLeft : "15px" })}
`;

const MenuItemNav = styled.div`
  margin-left: 25px;
  ${bigtabletw({ display: "none" })}
`;

const ItemMobile = styled.div`
  display : none;
  margin-right: 20px;
  ${tableth({ display: "block" })}
`;


const Header = () => {

  const quantity = useSelector(state => state.cart).quantity;
  const user = useSelector((state) => state.user.currentUser);
  console.log(quantity)
  console.log(user.user.avatar)

  return (
    <Container>
      <Wrapper>
        <Left>
          <ItemMobile>
              <Dehaze/>
          </ItemMobile>
          <Logo>
            <Image src="https://cdn.shopify.com/s/files/1/0555/0912/3177/files/logo.png?v=1648723388"/>
          </Logo>
          <Nav>
            <NavItem>
              <Link to="/cart">HOME</Link>
            </NavItem>
            <NavItem>
              <Link to="/cart">SHOP</Link>
            </NavItem>
            <NavItem>
              <Link to="/cart">BLOG</Link>
            </NavItem>
            <NavItem>
              <Link to="/cart">ABOUT US</Link>
            </NavItem>
          </Nav>
        </Left>
        <Right>
          <Link to="/cart">
            <MenuItem>
              <Badge>
                <Search style={{fontSize: "25px"}}/>
              </Badge>
            </MenuItem>
          </Link>
          <Link to="/cart">
            <MenuItemNav>
              {user ? <Image src={user.user.avatar}/>  : <Badge>
              <PersonOutline style={{fontSize: "25px"}}/>
            </Badge>}
              
            </MenuItemNav>
          </Link>
          <Link to="/cart">
            <MenuItem>
              <Badge>
                <FavoriteBorderSharp style={{fontSize: "25px"}}/>
              </Badge>
            </MenuItem>
          </Link>
          <Link to="/cart">
            <MenuItem>
              <Badge>
                <LocalMallOutlined style={{fontSize: "25px" }}/>
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Header;
