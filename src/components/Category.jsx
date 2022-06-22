import React from "react";
import styled from "styled-components";
import { mobileh, mobilew, bigtabletw, tableth } from "../reponsive";
const category = [
  {
    id: 1,
    img: "https://cdn.shopify.com/s/files/1/0555/0912/3177/files/collectionV1-img1.jpg?v=1648056487",
    name: "Dressing Table",
    total: 2,
  },
  {
    id: 2,
    img: "https://cdn.shopify.com/s/files/1/0555/0912/3177/files/collectionV1-img2.jpg?v=1648056486",
    name: "Bed",
    total: 8,
  },
  {
    id: 3,
    img: "https://cdn.shopify.com/s/files/1/0555/0912/3177/files/collectionV1-img3.jpg?v=1648056487",
    name: "Shelf",
    total: 6,
  },
  {
    id: 4,
    img: "https://cdn.shopify.com/s/files/1/0555/0912/3177/files/collectionV1-img4.jpg?v=1648056486",
    name: "Side Table",
    total: 5,
  },
];
const Container = styled.div``;

const Wrapper = styled.div`
  margin: 30px;
  padding: 30px 0;
  ${mobilew({paddingTop :"0px", paddingBottom: "50px" })}
`;

const CateList = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const CateItem = styled.div`
  width: 25%;
  display: flex;
  align-items: center;
  max-height: 75px;
  ${tableth({ width: "50%", paddingTop :"50px" })}
  ${mobilew({ width: "100%", paddingTop :"50px" })}
`;

const CateItemMain = styled.div`
  padding: 15px 20px;
  background-color: #ddd;
  display: flex;
  align-items: center;
  width: 100%;
  margin: 10px 20px ;
`;

const CateLeft = styled.div`
  
`;

const CateImg = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
`;

const CateRight = styled.div`
  margin-left: 15px;
`;

const CateName = styled.h2`
  font-size: 16px;
  transition: all 0.5s ease;
  cursor: pointer;
  &:hover{
    color: #f7525a;
  }
  ${tableth({ fontSize: "12px" })}

`;

const CatePro = styled.p`
  font-size: 15px;
  color: #666;
  font-weight: 600;
  margin-top: 10px;
  ${tableth({ fontSize: "12px" })}
`;

const Category = () => {
  return (
    <Container>
      <Wrapper>
        <CateList>
          {category.map((item) => (
            <CateItem>
              <CateItemMain>
              <CateLeft>
                <CateImg src={item.img}/>
              </CateLeft>
              <CateRight>
                <CateName>{item.name}</CateName>
                <CatePro>{item.total} products</CatePro>
              </CateRight>
              </CateItemMain>
              
            </CateItem>
          ))}
        </CateList>
      </Wrapper>
    </Container>
  );
};

export default Category;
