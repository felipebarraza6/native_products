import React, { createContext, useReducer, useEffect } from "react";
import "./assets/App.css";
import { Layout } from "antd";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./containers/Home";
import api from "./api/endpoints";
import { appReducer } from "./reducers/appReducer";
export const AppContext = createContext();

function App() {
  const initialState = {
    registers: {
      list: [],
      page: 1,
      filters: {
        region: "",
        province: "",
        commune: "",
        location: "",
        pfnm: "",
        species: "",
        condition: "",
        format_commercial: "",
        unit: "",
        price_1: "",
        location_sale: "",
      },
    },
    photos: [],
    photos_page: 1,
    uniques_values_selects: null,
  };

  const [state, dispatch] = useReducer(appReducer, initialState);

  const getInitialData = async () => {
    const rq1 = await api.registers
      .list(state.registers.page, state.registers.filters)
      .then((res) => {
        dispatch({
          type: "ADD_REGISTERS",
          payload: { list: res.results, count: res.count },
        });
      });
    const rq2 = await api.images_gallery.list(state.photos_page).then((res) => {
      dispatch({ type: "ADD_IMAGES", payload: res.results });
    });

    const rq3 = await api.registers.uniques_values().then((res) => {
      dispatch({ type: "SET_FILTERS_SELECT", payload: res });
    });

    return Promise.all([rq1, rq2, rq3]);
  };

  const getRegisters = async (page) => {
    const rq = await api.registers
      .list(page, state.registers.filters)
      .then((res) => {
        dispatch({
          type: "ADD_REGISTERS",
          payload: { list: res.results, count: res.count },
        });
      });
    return rq;
  };

  useEffect(() => {
    if (state.registers.page > 1) {
      getRegisters(state.registers.page, state.registers.filters);
    }
    getInitialData();
  }, [state.registers.page, state.registers.filters]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <Layout style={styles.layout}>
          <Router>
            <Routes>
              <Route index path="/" element={<Home />} />
            </Routes>
          </Router>
        </Layout>
      </div>
    </AppContext.Provider>
  );
}

const styles = {
  layout: {
    minHeight: "100vh",
  },
};

export default App;
