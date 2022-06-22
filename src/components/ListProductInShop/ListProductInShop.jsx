import React from "react";
import ProductItem from "../ProductItem/ProductItem";
import axios from "axios";
import "./listProductInShop.css";

import { useEffect, useState } from "react";

const ListProductInShop = ({select, cate, totalsize}) => {
  console.log("cate va select ne",select, cate, totalsize)
  const [products, setProducts] = useState([]);
  console.log(products)
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/product");
        console.log(res.data);
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, []);

  const [page, setPage] = useState(1);
  const [totalItem, setTotalItem] = useState(12);
  const max = Math.ceil(products.length / totalItem)
  console.log(max)

  const handlePrev = () => {
    if (page < 2) {
      setPage(1);
    } else {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    if (page > max -1) {
      setPage(max);
    } else {
      setPage(page + 1);
    }
  };

  const handlePlus = () => {
    setPage(page + 1);
  };

  const handleMax = () => {
    setPage(max);
  };

  const handleFirst = () => {
    setPage(1);
  };
  
  let listProductFilterbySelect = []
  if(select === 0){
    listProductFilterbySelect = products
  }else{
    for(let i = 0 ; i < products.length; i++){
      if(products[i].price >= select){
        listProductFilterbySelect.push(products[i])
      }
    }
  }
  console.log("danh sach filter :", listProductFilterbySelect)


  let listProductFilterbyCate = []
  if(cate === "All"){
    listProductFilterbyCate = products
  }else{
    for(let i = 0 ; i < products.length; i++){
      if(products[i].categories === cate){
        listProductFilterbyCate.push(products[i])
      }
    }
  }
  console.log("danh sach cate :", listProductFilterbyCate)
  

  let listProductFilterbySize = []
  if(totalsize === "allItem"){
     listProductFilterbySize = products
  }else{
    for(let i = 0 ; i < products.length; i++){
      for(let j = 0 ; j < products[i].size.length; j++){
        if(products[i].size[j] === totalsize){
          listProductFilterbySize.push(products[i])
        }
      }
    }
  }
  console.log("danh sach size :", listProductFilterbySize)

  // let listProductFinal = [...listProductFilterbyCate, ...listProductFilterbySelect, ...listProductFilterbySize]
  // console.log(listProductFinal)

  // let myArrayWithNoDuplicates = listProductFinal.reduce(function (accumulator, element) {
  //   if (accumulator.indexOf(element) === -1) {
  //     accumulator.push(element)
  //   }
  //   return accumulator
  // }, [])
  let listProductFinal = []

  if(totalsize === "allItem" && select === 0){
    listProductFinal = [...listProductFilterbyCate]
  }
  else if (totalsize === "allItem" && select !== 0){
    for(let i = 0 ; i < listProductFilterbyCate.length ; i++){
      if(listProductFilterbyCate[i].price >= select){
        listProductFinal.push(listProductFilterbyCate[i])
      }
    }
  }
  else if (totalsize !== "allItem" && select === 0){
    for(let i = 0 ; i < listProductFilterbyCate.length ; i++){
      if(listProductFilterbyCate[i].size.includes(totalsize)){
        listProductFinal.push(listProductFilterbyCate[i])
      }
    }
  }else{
    for(let i = 0 ; i < listProductFilterbyCate.length ; i++){
      if(listProductFilterbyCate[i].price >= select && listProductFilterbyCate[i].size.includes(totalsize)){
        listProductFinal.push(listProductFilterbyCate[i])
      }
    }
  }

  console.log(listProductFinal)
  
  return (
    <div className="ListProductInShop__container">
      <div className="ListProductInShop__wrapper">
        <div className="ListProductInShop__listProd">
          {listProductFinal.map((item, index) => {
            if (index >= (page - 1) * totalItem && index < page * totalItem) {
              return <ProductItem item={item} key={item._id} dataItem={item._id} />;
            }
          })}
        </div>
        <div className="ListProductInShop__pagination">
          <div className="ListProductInShop__pagination-item ListProductInShop__prev" onClick={handlePrev}>
            prev
          </div>
          {/* <div className="ListProductInShop__pagination-item" onClick={handleFirst}>
            1
          </div> */}
          {
            page > 1 ? 
            <div className="ListProductInShop__pagination-item" onClick={handleFirst}>
                1
            </div> : <></>
          }
          {
            page === max ? 
            <div className="ListProductInShop__pagination-item">
            ...
            </div> : <></>
          }
          {
            page < max + 1 ? 
            <div className="ListProductInShop__pagination-item active" onClick={handlePlus}>
                {page}
            </div> : <></>
          }
          
          {
            page + 1 < max ? 
            <div className="ListProductInShop__pagination-item" onClick={handlePlus}>
                {page + 1}
            </div> : <></>
          }
          {
            page < max ? 
            <div className="ListProductInShop__pagination-item">
            ...
            </div> : <></>
          }
          
          {
            page < max ? 
            <div className="ListProductInShop__pagination-item" onClick={handleMax}>
            {max}
            </div> : <></>
          }
          
          <div className="ListProductInShop__pagination-item ListProductInShop__next" onClick={handleNext}>
            next
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListProductInShop;
