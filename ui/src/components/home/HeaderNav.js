import React, { useContext } from "react";

import { Layout, Row, Col, Typography, Button } from "antd";
import gov from "../../assets/img/gov.jpg";
import bnativo from "../../assets/img/bnativo.jpg";
import infor from "../../assets/img/infor.jpg";
import portada from "../../assets/img/portada.jpg";
import { AppContext } from "../../App";

const { Header } = Layout;
const { Title, Paragraph } = Typography;

const HeaderNav = () => {
  const { state, dispatch } = useContext(AppContext);
  return (
    <Header style={{ background: "#fff", padding: 0, height: "120px" }}>
      <Row align={"top"}>
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
              height: "120px",
            }}
            offset={1}
            span={10}
          ></Col>
        )}

        <Col
          xl={7}
          xs={12}
          style={{ backgroundColor: "#5c068c", height: "120px" }}
        >
          {window.innerWidth > 768 ? (
            <>
              <Paragraph
                style={{
                  color: "white",
                  textAlign: "left",
                  marginTop: "33px",
                  marginLeft: "10px",
                  fontSize: "17px",
                }}
              >
                <Button
                  style={{
                    marginTop: "-20px",
                    marginRight: "10px",
                    borderRadius: "0px",
                    float: "right",
                    backgroundColor: "rgb(254, 80, 0)",
                  }}
                  type="primary"
                  onClick={() => {
                    dispatch({
                      type: "SET_FILTERS",
                      payload: { pfnm: "Maqui" },
                    });
                  }}
                >
                  maqui
                </Button>
                Observatorio de precios / <br /> Productos Forestales No
                Madereros (PFNM)
              </Paragraph>
            </>
          ) : (
            <Paragraph
              style={{ color: "white", paddingTop: "20px", fontWeight: "600" }}
            >
              Observatorio de precios / <br /> Productos Forestales No Madereros
              (PFNM)
            </Paragraph>
          )}
        </Col>
      </Row>
    </Header>
  );
};

export default HeaderNav;
