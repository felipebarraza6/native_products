import React, { useContext, useEffect, useState } from "react";
import { Table } from "antd";
import { AppContext } from "../App";

const TableData = () => {
  const { state, dispatch } = useContext(AppContext);
  const [columns, setColumns] = useState([
    { title: "Región", dataIndex: "region" },
    { title: "Provincia", dataIndex: "province" },
    { title: "Comuna", dataIndex: "commune" },
    { title: "Localidad", dataIndex: "location" },
    { title: "Pfmn", dataIndex: "pfnm" },
    { title: "Especie", dataIndex: "species" },
    { title: "Condición", dataIndex: "condition" },
    { title: "Formato comercial", dataIndex: "format_comercial" },
    { title: "Unidad", dataIndex: "unit" },
    { title: "Precio", dataIndex: "price_1" },
    { title: "Lugar de venta", dataIndex: "location_sale" },
  ]);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setColumns([
        {
          title: "Ubicación",
          render: (record) =>
            `${record.region}, ${record.province}, ${record.commune}, ${record.location}`,
        },
        {
          title: "Pfnm",
          render: (record) => `${record.pfnm}, ${record.price_1}`,
        },
        { title: "Especie", dataIndex: "species" },
        { title: "Condición", dataIndex: "condition" },
        { title: "Formato comercial", dataIndex: "format_commercial" },
        { title: "Unidad", dataIndex: "unit" },
        { title: "Lugar de venta", dataIndex: "location_sale" },
      ]);
    }
  }, []);

  return (
    <Table
      dataSource={state.registers.list}
      pagination={{
        pageSize: 10,
        total: state.registers.count,
        simple: true,
        onChange: (page) => {
          dispatch({ type: "SET_PAGE", payload: page });
        },
        showSizeChanger: false,
        showTotal: (total, range) =>
          `${range[0]}-${range[1]} de ${total} registros`,
        position: "top",
        size: "small",
      }}
      bordered
      size="small"
      className="custom-table"
      columns={columns}
      style={{ marginTop: "50px" }}
    />
  );
};

export default TableData;
