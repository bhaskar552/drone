import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const icon = L.divIcon({
  className: 'custom-icon',
  html: '<div style="background-color: #e25a5a; border: 2px solid white; border-radius: 50%; width: 20px; height: 20px;"></div>',
  iconSize: [20, 20],
  iconAnchor: [10, 10],
  popupAnchor: [0, -10]
});

function Map({ latitude, longitude }) {
  const position = [latitude, longitude];

  return (
    <MapContainer center={position} zoom={13} style={{ height: '200px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position} icon={icon}>
        <Popup>
          Last Known Location<br />
          Lat: {latitude}, Lng: {longitude}
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;