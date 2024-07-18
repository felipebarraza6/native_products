import React from "react";

import { Layout, Row, Col, Typography } from "antd";
import gov from "../../assets/img/gov.jpg";
import bnativo from "../../assets/img/bnativo.jpg";
import infor from "../../assets/img/infor.jpg";
import portada from "../../assets/img/portada.jpg";

const { Header } = Layout;
const { Title, Paragraph } = Typography;

const HeaderNav = () => {
  return (
    <Header style={{ background: "#fff", padding: 0, height: "100px" }}>
      <Row align={"top"} style={{ padding: "0px" }}>
        <Col xl={2} xs={4}>
          <img
            src={bnativo}
            style={{
              width: window.innerWidth > 768 ? "100px" : "100%",
              marginRight: "10px",
              paddingTop: "30px",
            }}
            alt="logo"
          />
        </Col>
        <Col xl={2} xs={4}>
          <img
            src={gov}
            alt="gov"
            style={{
              width: "60px",
              marginRight: "10px",
              paddingTop: "20px",
            }}
          />
        </Col>
        <Col xl={2} x={4}>
          <img
            src={infor}
            alt="infor"
            style={{
              width: "60px",
              marginRight: "5px",
              paddingTop: "13px",
            }}
          />
        </Col>
        {window.innerWidth > 768 && (
          <Col
            style={{
              background: `url(${portada})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              boxSizing: "border-box",
              padding: "50px",
            }}
            offset={1}
            span={11}
          ></Col>
        )}

        <Col
          xl={6}
          xs={12}
          style={{ backgroundColor: "#5c068c", height: "100px" }}
        >
          {window.innerWidth > 768 ? (
            <Title
              level={5}
              style={{
                color: "white",
                textAlign: "left",
                marginTop: "16px",
                marginLeft: "10px",
                fontSize: "17px",
              }}
            >
              Observatorio de precios / <br /> Productos Forestales Madereros
              (PFNM)
            </Title>
          ) : (
            <Paragraph
              style={{ color: "white", paddingTop: "20px", fontWeight: "600" }}
            >
              Observatorio de precios / <br /> Productos Forestales Madereros
              (PFNM)
            </Paragraph>
          )}
        </Col>
      </Row>
    </Header>
  );
};

export default HeaderNav;
