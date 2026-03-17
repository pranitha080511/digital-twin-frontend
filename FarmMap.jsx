"use client";

import { MapContainer, TileLayer, FeatureGroup } from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import { useState } from "react";

export default function FarmMap({ onBoundarySelect }) {

  const [boundary, setBoundary] = useState(null);

  function handleCreated(e) {

    const layer = e.layer;
    const coordinates = layer.getLatLngs()[0];

    const polygon = coordinates.map((point) => [
      point.lng,
      point.lat
    ]);

    setBoundary(polygon);

    if (onBoundarySelect) {
      onBoundarySelect(polygon);
    }

  }

  return (

    <MapContainer
      center={[11.341, 77.717]}
      zoom={15}
      style={{ height: "400px", width: "100%" }}
    >

      <TileLayer
        attribution="© OpenStreetMap"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <FeatureGroup>

        <EditControl
          position="topright"
          onCreated={handleCreated}
          draw={{
            rectangle: false,
            circle: false,
            circlemarker: false,
            marker: false,
            polyline: false
          }}
        />

      </FeatureGroup>

    </MapContainer>

  );
}