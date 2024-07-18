import React, { useContext } from "react";
import { Carousel, Row, Col, Button } from "antd";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { AppContext } from "../App";
const Gallery = () => {
  const carouselRef = React.useRef(null);
  const { state } = useContext(AppContext);

  return (
    <Row align="middle" style={{ marginTop: "30px" }}>
      <Col span={1}>
        <Button
          shape="circle"
          icon={<ArrowLeftOutlined style={{ color: "black" }} />}
          style={{ border: "1px solid black", borderColor: "black" }}
          onClick={() => {
            if (carouselRef.current) {
              carouselRef.current.prev();
            }
          }}
        ></Button>
      </Col>
      <Col span={22}>
        <Carousel
          infinite={true}
          ref={carouselRef}
          dots={false}
          slidesToShow={4}
          arrows
          draggable
          steps={2}
          nextArrow={<div>Next</div>}
        >
          {state.photos.map((photo) => (
            <div style={{ paddingRight: "10px" }}>
              <img src={photo.image} alt="img1" width="90%" />
            </div>
          ))}
          
         
        </Carousel>
      </Col>
      <Col span={1}>
        <Button
          shape="circle"
          icon={<ArrowRightOutlined style={{ color: "black" }} />}
          style={{ border: "1px solid black", borderColor: "black" }}
          onClick={() => {
            if (carouselRef.current) {
              carouselRef.current.next();
            }
          }}
        ></Button>
      </Col>
    </Row>
  );
};

export default Gallery;
