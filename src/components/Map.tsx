"use client";

import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Popup, CircleMarker } from "react-leaflet";
import { Location } from "@/customTypes/dashboard-data";

export default function Map({ locations }: { locations: Location[] }) {
  return (
      <MapContainer
        className="w-full h-[400px] rounded-lg"
        center={[39, -98]}
        zoom={3}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {locations.map((location, index) => (
          <CircleMarker
            key={location.label + index}
            center={[location.latitude, location.longitude]}
            radius={10}
            fillColor="hsl(var(--primary))"
            color="hsl(var(--primary))"
          >
            <Popup>
              {location.label} <br /> {location.activity} Activities
            </Popup>
          </CircleMarker>
        ))}
      </MapContainer>
  );
}
