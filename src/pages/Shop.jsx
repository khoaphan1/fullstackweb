import React, { useState, useEffect } from "react";
import Header from '../components/Header/Header';
import Footer from "../components/Footer";
import styled from "styled-components";
import SliderNav from "../components/SliderNav";
import { tableth, tabletw } from "../reponsive";
import ListProductInShop from "../components/ListProductInShop/ListProductInShop";
import { useDispatch, useSelector } from "react-redux";
import {getCategories} from "../redux/apiRequest"

const BodyShop = styled.div`
  display: flex;
  padding: 10px 100px;
  ${tableth({ padding: "20px", flexWrap: "wrap", marginTop: "0px" })}
  ${tabletw({ padding: "20px", flexWrap: "wrap", marginTop: "0px" })}
  background-color: #fff;

`;

const ShopLeft = styled.div`
  width: calc(100% * 3 / 12);
  ${tabletw({ width: "100%"})}
`;

const ShopRight = styled.div`
  width: calc(100% * 9 / 12);
  ${tabletw({ width: "100%"})}
`;

const Filter = styled.div`
  margin: 40px 0;
`;

const NameFilter = styled.div`
  padding: 6px 0 6px 14px;
  border-left: 3px solid #111111;
  position: relative;
`;

const NameText = styled.h2`
  font-size: 15px;
  letter-spacing: 2px;
  font-weight: 500;
  text-transform: uppercase;
  position: relative;
  display: inline-block;
  padding-right: 15px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  height: 24px;
  position: relative;
  box-sizing: border-box;
  border-radius: 2px;
  margin-top: 10px;
`;

const RadioButtonLabel = styled.label`
  position: absolute;
  top: 30%;
  left: 4px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: white;
  border: 1px solid #ccc;
`;
const RadioButton = styled.input`
  opacity: 0;
  z-index: 1;
  cursor: pointer;
  width: 11px;
  height: 11px;
  margin-right: 10px;
  &:hover ~ ${RadioButtonLabel} {
    background: #ccc;
    &::after {
      display: block;
      color: white;
      width: 12px;
      height: 12px;
      margin: 4px;
    }
  }
  &:checked + ${Item} {
    background: #f7525a;
    border: 2px solid #f7525a;
  }
  &:checked + ${RadioButtonLabel} {
    background: #f7525a;
    border: 1px solid #f7525a;
    &::after {
      display: block;
      color: white;
      width: 12px;
      height: 12px;
      margin: 4px;
    }
  }
`;

const CateItem = styled.div`
  font-size: 15px;
  font-weight: 600;
  color: #333;
  margin: 15px 0;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    color: #f7525a;
  }
`;

const SizeFilter = styled.div`
  display: flex;
  margin-top: 30px;
  flex-wrap: wrap;
`;

const SizeItem = styled.div`
  display: inline-block;
  border: 1px solid #111111 !important;
  color: #111111;
  padding: 0;
  width: 40px;
  line-height: 40px;
  margin: 0 10px 10px 0 !important;
  text-align: center;
  transition: all 0.3s ease;
  font-size: 14px;
  font-weight: 500;
  &:hover {
    border: 1px solid #f7525a !important;
    background-color: #f7525a;
    color: #fff;
    cursor: pointer;
  }
`;

const ColorFilter = styled.div`
  display: flex;
  margin-top: 10px;
  flex-wrap: wrap;
`;

const ColorItem = styled.div`
  margin-right: 30px;
  margin-top: 10px;
  &:hover {
    &:before {
      content: "";
      border: 1px solid #ccc;
      width: 34px;
      height: 34px;
      position: absolute;
      border-radius: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      top: 50%;
      transition: all 0.3s ease;
      opacity: 0;
    }
  }
`;

const Color = styled.div`
  display: block;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  position: relative;
  border: 1px solid #ccc;
  background-color: #${(props) => props.bg};
  cursor: pointer;
`;

const Shop = () => {
  const [select, setSelect] = useState(0);


  const dispatch = useDispatch();


  const categories = useSelector((state) => state.category.categories);

  useEffect(() => {
    getCategories(dispatch);
  }, [dispatch]);

  console.log(categories)

  const [filterCate, setFilterCate] = useState("All")
  console.log("đây là", filterCate)
  console.log("đây là select", select)
  const [filterSize, setFilterSize] = useState("allItem")


  return (
    <div>
      <Header />
      <SliderNav />
      <BodyShop>
        <ShopLeft>
          <Filter>
            <NameFilter>
              <NameText>Categories</NameText>
            </NameFilter>
            <CateItem onClick={() => setFilterCate("All")} style={filterCate === "All"  ? {color: 'red'} : {}}>All item</CateItem>
            {categories.map((cate, index) => (
              <CateItem onClick={() => setFilterCate(cate.name)} style={filterCate === cate.name  ? {color: 'red'} : {}}>{cate.name}</CateItem>
            ))}
          </Filter>
          <Filter>
            <NameFilter>
              <NameText>Price</NameText>
            </NameFilter>
            <Item>
              <RadioButton
                type="radio"
                name="radio"
                checked={select === 0}
                onChange={() => setSelect(0)}
              />
              <RadioButtonLabel />
              <div>All item</div>
            </Item>
            <Item>
              <RadioButton
                type="radio"
                name="radio"
                checked={select === 20}
                onChange={() => setSelect(20)}
              />
              <RadioButtonLabel />
              <div>20.00 $ +</div>
            </Item>
            <Item>
              <RadioButton
                type="radio"
                name="radio"
                checked={select === (40)}
                onChange={() => setSelect(40)}
              />
              <RadioButtonLabel />
              <div>40.00 $ +</div>
            </Item>
            <Item>
              <RadioButton
                type="radio"
                name="radio"
                checked={select === 60}
                onChange={() => setSelect(60)}
              />
              <RadioButtonLabel />
              <div>60.00 $ +</div>
            </Item>
            <Item>
              <RadioButton
                type="radio"
                name="radio"
                checked={select === 80}
                onChange={() => setSelect(80)}
              />
              <RadioButtonLabel />
              <div>80.00 $ +</div>
            </Item>
            <Item>
              <RadioButton
                type="radio"
                name="radio"
                value={100}
                checked={select === 100}
                onChange={() => setSelect(100)}
              />
              <RadioButtonLabel />
              <div>100.00 $ +</div>
            </Item>
          </Filter>
          <Filter>
            <NameFilter>
              <NameText>Size</NameText>
            </NameFilter>
            <SizeFilter>
              <SizeItem onClick={() => setFilterSize("allItem")} style={filterSize === "allItem" ? {backgroundColor: 'red'} : {} }>All</SizeItem>
              <SizeItem onClick={() => setFilterSize("S")} style={filterSize === "S"  ? {backgroundColor: 'red'} : {}}>S</SizeItem>
              <SizeItem onClick={() => setFilterSize("M")} style={filterSize === "M" ? {backgroundColor: 'red'} : {} } >M</SizeItem>
              <SizeItem onClick={() => setFilterSize("L")} style={filterSize === "L" ? {backgroundColor: 'red'} : {} } >L</SizeItem>
              <SizeItem onClick={() => setFilterSize("XL")} style={filterSize === "XL" ? {backgroundColor: 'red'} : {} } >XL</SizeItem>
            </SizeFilter>
          </Filter>
          {/* <Filter>
            <NameFilter>
              <NameText>Color</NameText>
            </NameFilter>
            <ColorFilter>
              <ColorItem>
                <Color bg={"000"}></Color>
              </ColorItem>
              <ColorItem>
                <Color bg={"b22222"}></Color>
              </ColorItem>
              <ColorItem>
                <Color bg={"808080"}></Color>
              </ColorItem>
              <ColorItem>
                <Color bg={"f0e68c"}></Color>
              </ColorItem>
              <ColorItem>
                <Color bg={"e6e6fa"}></Color>
              </ColorItem>
              <ColorItem>
                <Color bg={"778899"}></Color>
              </ColorItem>
              <ColorItem>
                <Color bg={"c71585"}></Color>
              </ColorItem>
              <ColorItem>
                <Color bg={"fdf5e6"}></Color>
              </ColorItem>
              <ColorItem>
                <Color bg={"f4a460"}></Color>
              </ColorItem>
              <ColorItem>
                <Color bg={"a0522d"}></Color>
              </ColorItem>
            </ColorFilter>
          </Filter> */}
        </ShopLeft>
        <ShopRight>
          <ListProductInShop select={select} cate={filterCate} totalsize={filterSize}  />
        </ShopRight>
      </BodyShop>

      <Footer />
    </div>
  );
};

export default Shop;
