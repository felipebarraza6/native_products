import React, { useContext, useState } from "react";
import {
  Layout,
  Select,
  Row,
  Col,
  Button,
  Form,
  notification,
  Drawer,
} from "antd";
import {
  FileExcelOutlined,
  ReloadOutlined,
  StarOutlined,
} from "@ant-design/icons";
import { AppContext } from "../../App";
import { list_registers } from "../../api/endpoints";
import * as XLSX from "xlsx";
const { Sider } = Layout;
const { Item } = Form;

const SiderFilters = () => {
  const { state, dispatch } = useContext(AppContext);
  const [form] = Form.useForm();
  const [visible, setVisible] = useState(false);
  const [startDownnload, setStartDownload] = useState(false);

  const onFinish = (_, values) => {
    dispatch({ type: "SET_FILTERS", payload: values });
  };

  const onFilterMaqui = () => {
    dispatch({ type: "SET_FILTERS", payload: { pfnm: "Maqui" } });
  };

  const resetFields = () => {
    dispatch({
      type: "SET_FILTERS",
      payload: {
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
    });
    form.resetFields();
  };

  const downloadExcel = async () => {
    setStartDownload(true);
    const totalRegisters = state.registers.count;
    const pageSize = 10;
    const totalPages = Math.ceil(totalRegisters / pageSize);
    let totalElemennts = [];

    const getRegisters = async (page) => {
      const response = await list_registers(page, state.registers.filters).then(
        (res) => {
          totalElemennts = [...totalElemennts, ...res.results];
        }
      );
      return response;
    };

    // Execute getRegisters for each page
    for (let page = 1; page <= totalPages; page++) {
      await getRegisters(page);
    }
    const data = totalElemennts.map((register) => ({
      Región: register.region,
      Provincia: register.province,
      Comuna: register.commune,
      Localidad: register.location,
      Pfnm: register.pfnm,
      Especie: register.species,
      Condición: register.condition,
      "Formato Comercial": register.format_commercial,
      Unidad: register.unit,
      Precio: register.price_1,
      "Lugar de Venta": register.location_sale,
    }));

    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Registros");
    XLSX.writeFile(wb, "registros.xlsx");

    // Show notification when download is complete
    notification.success({ message: "Descarga completada" });
    setStartDownload(false);
  };

  return (
    <>
      {window.innerWidth > 768 ? (
        <Sider style={styles.sider} width={"240px"}>
          <Row style={styles.container}>
            <Col span={24}>
              <Form form={form} onValuesChange={onFinish}>
                <Col span={24}>
                  <Item name="region">
                    <Select
                      placeholder="Región"
                      className="custom-select"
                      style={styles.select}
                      dropdownStyle={styles.dropdown}
                    >
                      {state.uniques_values_selects &&
                        state.uniques_values_selects.regions.map((region) => (
                          <Select.Option
                            value={region}
                            style={styles.select.innerSelect}
                          >
                            {region}
                          </Select.Option>
                        ))}
                    </Select>
                  </Item>
                  <Item name="province" style={styles.item}>
                    <Select
                      placeholder="Provincia"
                      className="custom-select"
                      width="100%"
                      style={styles.select}
                      dropdownStyle={styles.dropdown}
                    >
                      {state.uniques_values_selects &&
                        state.uniques_values_selects.provinces.map(
                          (province) =>
                            province !== "" && (
                              <Select.Option
                                value={province}
                                style={styles.select.innerSelect}
                              >
                                {province}
                              </Select.Option>
                            )
                        )}
                    </Select>
                  </Item>
                  <Item name="commune" style={styles.item}>
                    <Select
                      placeholder="Comuna"
                      className="custom-select"
                      width="100%"
                      style={styles.select}
                      dropdownStyle={styles.dropdown}
                    >
                      {state.uniques_values_selects &&
                        state.uniques_values_selects.communes.map(
                          (commune) =>
                            commune !== "" && (
                              <Select.Option
                                style={styles.select.innerSelect}
                                value={commune}
                              >
                                {commune}
                              </Select.Option>
                            )
                        )}
                    </Select>
                  </Item>
                  <Item name="location" style={styles.item}>
                    <Select
                      placeholder="Localidad"
                      className="custom-select"
                      width="100%"
                      style={styles.select}
                      dropdownStyle={styles.dropdown}
                    >
                      {state.uniques_values_selects &&
                        state.uniques_values_selects.locations.map(
                          (location) =>
                            location !== "" && (
                              <Select.Option
                                value={location}
                                style={styles.select.innerSelect}
                              >
                                {location}
                              </Select.Option>
                            )
                        )}
                    </Select>
                  </Item>
                  <Item name="pfnm" style={styles.item}>
                    <Select
                      placeholder="Pfnm"
                      className="custom-select"
                      width="100%"
                      style={styles.select}
                      dropdownStyle={styles.dropdown}
                    >
                      {state.uniques_values_selects &&
                        state.uniques_values_selects.pfnms.map((pfnm) => (
                          <Select.Option
                            value={pfnm}
                            style={styles.select.innerSelect}
                          >
                            {pfnm.includes("maqui") && (
                              <StarOutlined style={{ marginRight: "7px" }} />
                            )}
                            {pfnm}
                          </Select.Option>
                        ))}
                    </Select>
                  </Item>

                  <Item name="species" style={styles.item}>
                    <Select
                      placeholder="Especie"
                      className="custom-select"
                      width="100%"
                      style={styles.select}
                      dropdownStyle={styles.dropdown}
                    >
                      {state.uniques_values_selects &&
                        state.uniques_values_selects.species.map((species) => (
                          <Select.Option
                            value={species}
                            style={styles.select.innerSelect}
                          >
                            {species}
                          </Select.Option>
                        ))}
                    </Select>
                  </Item>
                  {false && (
                    <>
                      <Item name="condition" style={styles.item}>
                        <Select
                          placeholder="Condición"
                          className="custom-select"
                          width="100%"
                          style={styles.select}
                          dropdownStyle={styles.dropdown}
                        >
                          {state.uniques_values_selects &&
                            state.uniques_values_selects.conditions.map(
                              (condition) => (
                                <Select.Option
                                  value={condition}
                                  style={styles.select.innerSelect}
                                >
                                  {condition}
                                </Select.Option>
                              )
                            )}
                        </Select>
                      </Item>
                      <Item name="format_comercial" style={styles.item}>
                        <Select
                          placeholder="Formato comercial"
                          className="custom-select"
                          width="100%"
                          style={styles.select}
                          dropdownStyle={styles.dropdown}
                        >
                          {state.uniques_values_selects &&
                            state.uniques_values_selects.format_comercials.map(
                              (format_commercial) => (
                                <Select.Option
                                  value={format_commercial}
                                  style={styles.select.innerSelect}
                                >
                                  {format_commercial}
                                </Select.Option>
                              )
                            )}
                        </Select>
                      </Item>
                      <Item name="unit" style={styles.item}>
                        <Select
                          placeholder="Unidad"
                          className="custom-select"
                          width="100%"
                          style={styles.select}
                          dropdownStyle={styles.dropdown}
                        >
                          {state.uniques_values_selects &&
                            state.uniques_values_selects.units.map((unit) => (
                              <Select.Option
                                value={unit}
                                style={styles.select.innerSelect}
                              >
                                {unit}
                              </Select.Option>
                            ))}
                        </Select>
                      </Item>
                      <Item name="price_1" style={styles.item}>
                        <Select
                          placeholder="Precio"
                          className="custom-select"
                          width="100%"
                          style={styles.select}
                          dropdownStyle={styles.dropdown}
                        >
                          {state.uniques_values_selects &&
                            state.uniques_values_selects.prices.map(
                              (price_1) => (
                                <Select.Option
                                  value={price_1}
                                  style={styles.select.innerSelect}
                                >
                                  {new Intl.NumberFormat("es-CL", {
                                    style: "currency",
                                    currency: "CLP",
                                  }).format(price_1)}
                                </Select.Option>
                              )
                            )}
                        </Select>
                      </Item>
                      <Item name="location_sale" style={styles.item}>
                        <Select
                          placeholder="Lugar de venta"
                          className="custom-select"
                          style={styles.select}
                          dropdownStyle={styles.dropdown}
                        >
                          {state.uniques_values_selects &&
                            state.uniques_values_selects.locations_sales.map(
                              (location_sale) =>
                                location_sale !== "" && (
                                  <Select.Option
                                    value={location_sale}
                                    style={styles.select.innerSelect}
                                  >
                                    {location_sale.toUpperCase()}
                                  </Select.Option>
                                )
                            )}
                        </Select>
                      </Item>
                    </>
                  )}

                  <Item style={styles.item}>
                    <Button
                      type="primary"
                      block={true}
                      style={styles.btn2}
                      onClick={onFilterMaqui}
                    >
                      Maqui
                    </Button>
                  </Item>
                </Col>
                <Col span={24}>
                  <Row justify={"space-between"} style={{ marginTop: "10px" }}>
                    <Col>
                      <Button
                        size={"small"}
                        style={styles.btnS}
                        icon={<FileExcelOutlined />}
                        loading={startDownnload}
                        onClick={downloadExcel}
                      >
                        Descargar
                      </Button>
                    </Col>
                    <Col>
                      <Button
                        size={"small"}
                        style={styles.btnS}
                        icon={<ReloadOutlined />}
                        onClick={resetFields}
                      >
                        Reiniciar
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Form>
            </Col>
          </Row>
        </Sider>
      ) : (
        <Row style={styles.rowMobile} justify={"center"}>
          <Col>
            <Button
              style={{
                marginTop: "10px",
                backgroundColor: "#5c068c",
                borderColor: "#5c068c",
                color: "white",
              }}
              onClick={() => setVisible(true)}
            >
              Ver Filtros
            </Button>
          </Col>
          <Drawer open={visible} onClose={() => setVisible(false)}>
            <Row style={styles.container}>
              <Col span={24}>
                <Form form={form} onValuesChange={onFinish}>
                  <Col span={24}>
                    <Item name="region">
                      <Select
                        placeholder="Región"
                        className="custom-select"
                        style={styles.select}
                        dropdownStyle={styles.dropdown}
                      >
                        {state.uniques_values_selects &&
                          state.uniques_values_selects.regions.map((region) => (
                            <Select.Option
                              value={region}
                              style={styles.select.innerSelect}
                            >
                              {region}
                            </Select.Option>
                          ))}
                      </Select>
                    </Item>
                    <Item name="province" style={styles.item}>
                      <Select
                        placeholder="Provincia"
                        className="custom-select"
                        width="100%"
                        style={styles.select}
                        dropdownStyle={styles.dropdown}
                      >
                        {state.uniques_values_selects &&
                          state.uniques_values_selects.provinces.map(
                            (province) =>
                              province !== "" && (
                                <Select.Option
                                  value={province}
                                  style={styles.select.innerSelect}
                                >
                                  {province}
                                </Select.Option>
                              )
                          )}
                      </Select>
                    </Item>
                    <Item name="commune" style={styles.item}>
                      <Select
                        placeholder="Comuna"
                        className="custom-select"
                        width="100%"
                        style={styles.select}
                        dropdownStyle={styles.dropdown}
                      >
                        {state.uniques_values_selects &&
                          state.uniques_values_selects.communes.map(
                            (commune) =>
                              commune !== "" && (
                                <Select.Option
                                  style={styles.select.innerSelect}
                                  value={commune}
                                >
                                  {commune}
                                </Select.Option>
                              )
                          )}
                      </Select>
                    </Item>
                    <Item name="location" style={styles.item}>
                      <Select
                        placeholder="Localidad"
                        className="custom-select"
                        width="100%"
                        style={styles.select}
                        dropdownStyle={styles.dropdown}
                      >
                        {state.uniques_values_selects &&
                          state.uniques_values_selects.locations.map(
                            (location) =>
                              location !== "" && (
                                <Select.Option
                                  value={location}
                                  style={styles.select.innerSelect}
                                >
                                  {location}
                                </Select.Option>
                              )
                          )}
                      </Select>
                    </Item>
                    <Item name="pfnm" style={styles.item}>
                      <Select
                        placeholder="Pfnm"
                        className="custom-select"
                        width="100%"
                        style={styles.select}
                        dropdownStyle={styles.dropdown}
                      >
                        {state.uniques_values_selects &&
                          state.uniques_values_selects.pfnms.map((pfmn) => (
                            <Select.Option
                              value={pfmn}
                              style={styles.select.innerSelect}
                            >
                              {pfmn}
                            </Select.Option>
                          ))}
                      </Select>
                    </Item>
                    <Item name="species" style={styles.item}>
                      <Select
                        placeholder="Especie"
                        className="custom-select"
                        width="100%"
                        style={styles.select}
                        dropdownStyle={styles.dropdown}
                      >
                        {state.uniques_values_selects &&
                          state.uniques_values_selects.species.map(
                            (species) => (
                              <Select.Option
                                value={species}
                                style={styles.select.innerSelect}
                              >
                                {species}
                              </Select.Option>
                            )
                          )}
                      </Select>
                    </Item>
                    <Item name="condition" style={styles.item}>
                      <Select
                        placeholder="Condición"
                        className="custom-select"
                        width="100%"
                        style={styles.select}
                        dropdownStyle={styles.dropdown}
                      >
                        {state.uniques_values_selects &&
                          state.uniques_values_selects.conditions.map(
                            (condition) => (
                              <Select.Option
                                value={condition}
                                style={styles.select.innerSelect}
                              >
                                {condition}
                              </Select.Option>
                            )
                          )}
                      </Select>
                    </Item>
                    <Item name="format_comercial" style={styles.item}>
                      <Select
                        placeholder="Formato comercial"
                        className="custom-select"
                        width="100%"
                        style={styles.select}
                        dropdownStyle={styles.dropdown}
                      >
                        {state.uniques_values_selects &&
                          state.uniques_values_selects.format_comercials.map(
                            (format_commercial) => (
                              <Select.Option
                                value={format_commercial}
                                style={styles.select.innerSelect}
                              >
                                {format_commercial}
                              </Select.Option>
                            )
                          )}
                      </Select>
                    </Item>
                    <Item name="unit" style={styles.item}>
                      <Select
                        placeholder="Unidad"
                        className="custom-select"
                        width="100%"
                        style={styles.select}
                        dropdownStyle={styles.dropdown}
                      >
                        {state.uniques_values_selects &&
                          state.uniques_values_selects.units.map((unit) => (
                            <Select.Option
                              value={unit}
                              style={styles.select.innerSelect}
                            >
                              {unit}
                            </Select.Option>
                          ))}
                      </Select>
                    </Item>
                    <Item name="price_1" style={styles.item}>
                      <Select
                        placeholder="Precio"
                        className="custom-select"
                        width="100%"
                        style={styles.select}
                        dropdownStyle={styles.dropdown}
                      >
                        {state.uniques_values_selects &&
                          state.uniques_values_selects.prices.map((price_1) => (
                            <Select.Option
                              value={price_1}
                              style={styles.select.innerSelect}
                            >
                              {new Intl.NumberFormat("es-CL", {
                                style: "currency",
                                currency: "CLP",
                              }).format(price_1)}
                            </Select.Option>
                          ))}
                      </Select>
                    </Item>
                    <Item name="location_sale" style={styles.item}>
                      <Select
                        placeholder="Lugar de venta"
                        className="custom-select"
                        style={styles.select}
                        dropdownStyle={styles.dropdown}
                      >
                        {state.uniques_values_selects &&
                          state.uniques_values_selects.locations_sales.map(
                            (location_sale) =>
                              location_sale !== "" && (
                                <Select.Option
                                  value={location_sale}
                                  style={styles.select.innerSelect}
                                >
                                  {location_sale.toUpperCase()}
                                </Select.Option>
                              )
                          )}
                      </Select>
                    </Item>
                    <Item style={styles.item}>
                      <Button
                        type="primary"
                        block={true}
                        style={styles.btn2}
                        onClick={onFilterMaqui}
                      >
                        Maqui
                      </Button>
                    </Item>
                  </Col>
                  <Col span={24}>
                    <Row
                      justify={"space-between"}
                      style={{ marginTop: "10px" }}
                    >
                      <Col>
                        <Button
                          size={"small"}
                          style={styles.btnS}
                          icon={<FileExcelOutlined />}
                          loading={startDownnload}
                          onClick={downloadExcel}
                        >
                          Descargar
                        </Button>
                      </Col>
                      <Col>
                        <Button
                          size={"small"}
                          style={styles.btnS}
                          icon={<ReloadOutlined />}
                          onClick={resetFields}
                        >
                          Reiniciar
                        </Button>
                      </Col>
                    </Row>
                  </Col>
                </Form>
              </Col>
            </Row>
          </Drawer>
        </Row>
      )}
    </>
  );
};

const styles = {
  item: { marginTop: "-15px" },
  container: {
    marginTop: "10px",
    paddingLeft: "10px",
    paddingRight: "10px",
  },
  sider: {
    minHeight: "101vh",
    backgroundColor: "#D0D3D4",
  },
  rowMobile: {
    backgroundColor: "#D0D3D4",
  },
  select: {
    width: "100%",
    backgroundColor: "#5c068c",
    innerSelect: { color: "white" },
  },
  dropdown: {
    borderRadius: "0px",
    backgroundColor: "#5c068c",
    border: "1px solid white",
  },
  btnS: {
    marginRigth: "5px",
    backgroundColor: "#00843D",
    borderColor: "#00843D",
    color: "white",
    marginnRight: "5px",
    marginTop: "5px",
    width: "100%",
  },
  btn: {
    backgroundColor: "#5c068c",
    borderColor: "#5c068c",
    marginTop: "5px",
    width: "100%",
    color: "white",
    borderRadius: "0px",
  },
  btn2: {
    backgroundColor: "#FE5000",
    borderColor: "#FE5000",
    textAlign: "left",
    borderRadius: "0px",
  },
};

export default SiderFilters;
