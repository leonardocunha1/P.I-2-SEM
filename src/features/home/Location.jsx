import { useEffect } from "react";

import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import { motion } from "framer-motion";

import TextMd from "@/ui/TextMd";

const position = [-20.542805, -47.396542];

function Location() {
  return (
    <section className="bg-stone-900 px-5 py-10 text-primary-100">
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mx-auto flex h-96 max-w-2xl flex-col"
      >
        <TextMd label="Localização" />

        <div className="h-full">
          <MapContainer center={position} zoom={15} scrollWheelZoom={false}>
            <TileLayer
              attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MarkerWithPopup position={position} />
          </MapContainer>
        </div>
      </motion.div>
    </section>
  );
}

function MarkerWithPopup({ position }) {
  const map = useMap();

  useEffect(() => {
    const marker = L.marker(position).addTo(map);
    marker
      .bindPopup("Av. Alonso Y Alonso n° 0000 <br /> Esperamos por você!")
      .openPopup();
  }, [map, position]);

  return null;
}

export default Location;
