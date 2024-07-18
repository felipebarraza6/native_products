import React, { useEffect, useContext, useState } from "react";

import { TileLayer, MapContainer, Marker, Popup } from "react-leaflet";
import { AppContext } from "../App";

const MapRender = () => {
  const regionsCoordinates = [
    { lat: -36.722, lon: -71.762, name: "Biobio" },
    { lat: -37.083, lon: -72.5, name: "Ñuble" },
  ];

  const provincesCoordinates = [
    { lat: -36.8, lon: -71.05, name: "Punilla", region: "Biobio" },
    { lat: -36.82, lon: -73.05, name: "Concepción", region: "Biobio" },
    { lat: -37.25, lon: -73.32, name: "Arauco", region: "Biobio" },
    { lat: -36.62, lon: -72.95, name: "Diguillin", region: "Ñuble" },
    { lat: -36.6, lon: -72.72, name: "Itata", region: "Ñuble" },
    { lat: -37.25, lon: -73.32, name: "Arauco", region: "Ñuble" },
  ];

  const communesCoordinates = [
    {
      lat: -37.33,
      lon: -71.83,
      name: "Antuco",
      province: "Biobio",
      region: "Biobio",
    },
    {
      lat: -37.5,
      lon: -72.53,
      name: "Nacimiento",
      province: "Biobio",
      region: "Biobio",
    },
    {
      lat: -36.97,
      lon: -72.93,
      name: "Hualqui",
      province: "Concepción",
      region: "Biobio",
    },
    {
      lat: -36.97,
      lon: -72.93,
      name: "Ñiquen",
      province: "Concepción",
      region: "Biobio",
    },
    {
      lat: -37.62,
      lon: -73.38,
      name: "Los Alamos",
      province: "Arauco",
      region: "Biobio",
    },
    {
      lat: -37.35,
      lon: -71.83,
      name: "Tucapel",
      province: "Biobio",
      region: "Biobio",
    },
    {
      lat: -36.74,
      lon: -72.3,
      name: "Bulnes",
      province: "Diguillin",
      region: "Ñuble",
    },
    {
      lat: -36.42,
      lon: -71.95,
      name: "San Carlos",
      province: "Diguillin",
      region: "Ñuble",
    },
    {
      lat: -37.8,
      lon: -73.33,
      name: "Cañete",
      province: "Arauco",
      region: "Ñuble",
    },
    {
      lat: -37.12,
      lon: -72.55,
      name: "Yungay",
      province: "Diguillin",
      region: "Ñuble",
    },
    {
      lat: -36.74,
      lon: -72.42,
      name: "Quillón",
      province: "Diguillin",
      region: "Ñuble",
    },
    {
      lat: -36.62,
      lon: -72.95,
      name: "Tomé",
      province: "Diguillin",
      region: "Ñuble",
    },
    {
      lat: -36.8,
      lon: -72.95,
      name: "Sta. Juana",
      province: "Diguillin",
      region: "Ñuble",
    },
    {
      lat: -36.62,
      lon: -72.05,
      name: "El Carmen",
      province: "Diguillin",
      region: "Ñuble",
    },
    {
      lat: -37.58,
      lon: -72.53,
      name: "Negrete",
      province: "Diguillin",
      region: "Ñuble",
    },
    {
      lat: -36.73,
      lon: -71.83,
      name: "Pinto",
      province: "Diguillin",
      region: "Ñuble",
    },
    {
      lat: -36.28,
      lon: -72.53,
      name: "Quirihue",
      province: "Diguillin",
      region: "Ñuble",
    },
    {
      lat: -36.62,
      lon: -72.95,
      name: "Ranquil",
      province: "Diguillin",
      region: "Ñuble",
    },
    {
      lat: -36.82,
      lon: -73.05,
      name: "Concepcion",
      province: "Diguillin",
      region: "Ñuble",
    },
    {
      lat: -36.62,
      lon: -72.95,
      name: "Portezuelo",
      province: "Diguillin",
      region: "Ñuble",
    },
    {
      lat: -37.47,
      lon: -73.35,
      name: "Curanilahue",
      province: "Arauco",
      region: "Ñuble",
    },
    {
      lat: -36.62,
      lon: -72.95,
      name: "Sta. Bárbara",
      province: "Diguillin",
      region: "Ñuble",
    },
    {
      lat: -37.27,
      lon: -72.95,
      name: "Laja",
      province: "Diguillin",
      region: "Ñuble",
    },
    {
      lat: -36.43,
      lon: -72.95,
      name: "Ninhue",
      province: "Diguillin",
      region: "Ñuble",
    },
    {
      lat: -36.73,
      lon: -72.53,
      name: "Chillán",
      province: "Diguillin",
      region: "Ñuble",
    },
    {
      lat: -37.47,
      lon: -71.83,
      name: "Quilleco",
      province: "Biobio",
      region: "Ñuble",
    },
    {
      lat: -37.25,
      lon: -73.32,
      name: "Arauco",
      province: "Arauco",
      region: "Ñuble",
    },
    {
      lat: -36.62,
      lon: -71.83,
      name: "Coihueco",
      province: "Diguillin",
      region: "Ñuble",
    },
    {
      lat: -38.03,
      lon: -73.23,
      name: "Contulmo",
      province: "Arauco",
      region: "Ñuble",
    },
    {
      lat: -37.62,
      lon: -73.63,
      name: "Lebu",
      province: "Arauco",
      region: "Ñuble",
    },
    {
      lat: -36.97,
      lon: -72.53,
      name: "Pemuco",
      province: "Concepción",
      region: "Ñuble",
    },
    {
      lat: -36.82,
      lon: -72.53,
      name: "Florida",
      province: "Concepción",
      region: "Ñuble",
    },
    {
      lat: -36.12,
      lon: -72.95,
      name: "Cobquecura",
      province: "Diguillin",
      region: "Ñuble",
    },
    {
      lat: -36.52,
      lon: -72.95,
      name: "Coelemu",
      province: "Diguillin",
      region: "Ñuble",
    },
    {
      lat: -37.08,
      lon: -72.57,
      name: "Yumbel",
      province: "Diguillin",
      region: "Ñuble",
    },
    {
      lat: -37.47,
      lon: -72.35,
      name: "Los Ángeles",
      province: "Diguillin",
      region: "Ñuble",
    },
    {
      lat: -36.73,
      lon: -71.83,
      name: "San Fabián",
      province: "Diguillin",
      region: "Ñuble",
    },
  ];

  const allCoordinates = [
    ...regionsCoordinates,
    ...provincesCoordinates,
    ...communesCoordinates,
  ];

  const { state } = useContext(AppContext);
  const registers = state.registers.list;

  const [selectedCoordinates, setSelectedCoordinates] =
    useState(allCoordinates);

  useEffect(() => {
    const filteredCoordinates = allCoordinates.filter((coordinate) => {
      if (state.registers.filters.region) {
        return (
          coordinate.region === state.registers.filters.region ||
          coordinate.province === state.registers.filters.region ||
          coordinate.name === state.registers.filters.region
        );
      } else if (state.registers.filters.province) {
        return (
          coordinate.province === state.registers.filters.province ||
          (coordinate.region === state.registers.filters.province &&
            coordinate.name === state.registers.filters.province)
        );
      } else if (state.registers.filters.commune) {
        return (
          coordinate.name === state.registers.filters.commune ||
          (coordinate.province === state.registers.filters.commune &&
            coordinate.region === state.registers.filters.region)
        );
      } else {
        return true;
      }
    });

    setSelectedCoordinates(filteredCoordinates);
  }, [state.registers.filters]);

  return (
    <MapContainer
      center={[
        selectedCoordinates[0]?.lat,
        selectedCoordinates[selectedCoordinates.length - 1]?.lon,
      ]}
      zoom={8}
      scrollWheelZoom={false}
      style={styles.mapContaier}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {selectedCoordinates.map((coordinate, index) => {
        if (!coordinate.lat || !coordinate.lon) {
          return null;
        }
        // Generate a random color
        const randomColor = `#${Math.floor(Math.random() * 16777215).toString(
          16
        )}`;
        return (
          <Marker
            key={index}
            position={[coordinate.lat, coordinate.lon]}
            style={{ backgroundColor: randomColor }}
          >
            <Popup>{coordinate.name}</Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );

  return (
    <MapContainer
      center={[
        selectedCoordinates[0]?.lat,
        selectedCoordinates[selectedCoordinates.length - 1]?.lon,
      ]}
      zoom={7}
      scrollWheelZoom={false}
      style={styles.mapContaier}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {selectedCoordinates.map((coordinate, index) => {
        if (!coordinate.lat || !coordinate.lon) {
          return null;
        }
        // Generate a random color
        const randomColor = `#${Math.floor(Math.random() * 16777215).toString(
          16
        )}`;
        return (
          <Marker
            key={index}
            position={[coordinate.lat, coordinate.lon]}
            style={{ backgroundColor: randomColor }}
          >
            <Popup>{coordinate.name}</Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

const styles = {
  mapContaier: { height: "500px", width: "100%", zIndex: 0 },
};

export default MapRender;
