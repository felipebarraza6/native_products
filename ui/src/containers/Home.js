import React, { useContext } from "react";
import { Layout, Affix } from "antd";
import MapRender from "../components/MapRender";
import Gallery from "../components/Gallery";
import TableData from "../components/TableData";
import HeaderNav from "../components/home/HeaderNav";
import SiderFilters from "../components/home/SiderFilters";
import { AppContext } from "../App";

const { Content } = Layout;

const Home = () => {
  const { state } = useContext(AppContext);
  console.log(state);
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
              <TableData />
              {window.innerWidth > 768 && (
                <>
                  {state.registers.filters.pfnm && (
                    <>
                      {" "}
                      {state.registers.filters.pfnm.includes("maqui") && (
                        <>
                          <Gallery />
                        </>
                      )}
                    </>
                  )}
                </>
              )}

              <MapRender />
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
