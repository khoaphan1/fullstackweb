import { ChevronLeft, ChevronRight } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";
import { mobileh, mobilew, bigtabletw, tableth } from "../reponsive";
const sliderItems = [
  {
    id: 1,
    imgLeft:
      "https://cdn.shopify.com/s/files/1/0555/0912/3177/files/slideshowV3-product1.png?v=1647966769",
    imgRight:
      "https://cdn.shopify.com/s/files/1/0555/0912/3177/files/slideshowV3-bg1.jpg?v=1647966776",
    name: "Ball-Shaped",
    title: "Table Night Lamp.",
    price: "50",
    bg: "b8ccc6",
  },
  {
    id: 2,
    imgLeft:
      "https://cdn.shopify.com/s/files/1/0555/0912/3177/files/slideshowV3-product2.png?v=1647966784",
    imgRight:
      "https://cdn.shopify.com/s/files/1/0555/0912/3177/files/slideshowV3-bg2.jpg?v=1647966786",
    name: "Home Flower",
    title: "Plant Glass Vase",
    price: "20",
    bg: "b8ccc6",
  },
  {
    id: 3,
    imgLeft:
      "https://cdn.shopify.com/s/files/1/0555/0912/3177/files/slideshowV3-product3.png?v=1647966789",
    imgRight:
      "https://cdn.shopify.com/s/files/1/0555/0912/3177/files/slideshowV3-bg3.jpg?v=1647966792",
    name: "Modern Nordic",
    title: "Minimalist Cattle.",
    price: "40",
    bg: "b8ccc6",
  },
];

const Container = styled.div`
  margin-top: 90px;
  width: 100%;
  height: calc(100vh - 90px);
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobileh({ display: "none" })}
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: transparent;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
`;

const MySlide = styled.div`
  position: relative;

`;

const SliderLeft = styled.div`
  flex: 2;
  text-align: center;
  height: 100%;
  background-color: #b8ccc6;
  position: relative;
  ${bigtabletw({ display: "none" })}
  ${tableth({ display: "none" })}
  ${mobilew({ display: "block" })}
`;

const Textbox = styled.div`
  margin-top: 40px;
`;

const NameProduct = styled.div`
  color: #fff;
  margin-top: 10px;
  font-size: 32px;
  font-weight: 600;
`;

const SliderLeftImg = styled.img`
  width: 50%;
`;

const Price = styled.div`
  margin-bottom: 40px;
  color: #fff;
  font-size: 20px;
  bottom: "" ;
  position: absolute;
  bottom: 20%;
  right: 48%;
  ${mobilew({ position: "static"})}
`;

const Button = styled.div`
  position: absolute;
  border: 2px solid #fff;
  bottom: 18%;
  right: 44%;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  padding: 12px 8px;
  max-width: 140px;
  margin: auto;
  cursor: pointer;
  ${mobilew({ position: "static"})}
  
  transition: all 0.8s ease;
  &:hover {
    color: #f7525a !important;
    border-color: #f7525a !important;
    box-shadow: 0 0.5em 0.5em -0.4em #f7525a;
  }
`;

const SliderRight = styled.div`
  flex: 3;
  position: relative;
  height: 100%;
  ${mobilew({ display: "none" })}
`;

const SliderRightImg = styled.img`
  height: 100%;
`;

const BottomDot = styled.div`
  position: absolute;
  bottom: 20px;
  display: flex;
  width: 100vw;
  align-items: center;
  justify-content: center;
  margin-left: 50px;
  ${mobilew({ display: "none" })}
`;

const BottomItem = styled.div`
  color: #fff;
  font-weight: 600;
  font-size: 24px;
  margin-left: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: all 0.8s ease;
  &:hover {
    color: red;
  }
  &:focus-within {
    color: red;
  }
`;

const Line = styled.div`
  width: 52px;
  height: 2px;
  background-color: #fff;
  margin: 0 5px;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "1") {
      setSlideIndex(0);
    } else if (direction === "2") {
      setSlideIndex(1);
    } else if (direction === "3") {
      setSlideIndex(2);
    } else if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ChevronLeft style={{ fontSize: "40px" }} />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <MySlide>
            <Slide key={item.id}>
              <SliderLeft>
                <Textbox>
                  <NameProduct>{item.name}</NameProduct>
                  <NameProduct>{item.title}</NameProduct>
                </Textbox>
                <SliderLeftImg src={item.imgLeft} />
                <Price>${item.price}.00</Price>
                <Button>SHOP NOW</Button>
              </SliderLeft>
              <SliderRight>
                <SliderRightImg src={item.imgRight} />
              </SliderRight>
            </Slide>
            <BottomDot>
              <BottomItem direction="1" onClick={() => handleClick("1")}>
                01
                <Line />
              </BottomItem>
              <BottomItem direction="2" onClick={() => handleClick("2")}>
                02
                <Line />
              </BottomItem>
              <BottomItem direction="3" onClick={() => handleClick("3")}>
                03
              </BottomItem>
            </BottomDot>
          </MySlide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ChevronRight style={{ fontSize: "40px" }} />
      </Arrow>
    </Container>
  );
};

export default Slider;
