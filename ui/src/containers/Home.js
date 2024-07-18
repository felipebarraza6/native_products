import React from "react";
import { Layout, Affix } from "antd";
import MapRender from "../components/MapRender";
import Gallery from "../components/Gallery";
import TableData from "../components/TableData";
import HeaderNav from "../components/home/HeaderNav";
import SiderFilters from "../components/home/SiderFilters";

const { Content } = Layout;

const Home = () => {
  return (
    <>
      <Layout>
        <Affix offsetTop={0}>
          <HeaderNav />
        </Affix>
        <Layout>
          {window.innerWidth > 768 ? (
            <Affix offsetTop={100}>
              <SiderFilters />
            </Affix>
          ) : (
            <SiderFilters />
          )}

          <Layout>
            <Content style={styles.container}>
              <MapRender />
              {window.innerWidth > 768 && <Gallery />}
              <TableData />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
};

const styles = {
  container: {
    padding: "10px",
    backgroundColor: "#D0D3d4",
  },
};

export default Home;
