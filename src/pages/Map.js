import React, { useState, useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl/dist/mapbox-gl-csp";
// eslint-disable-next-line import/no-webpack-loader-syntax
import MapboxWorker from "worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker";
import "react-router-dom";

import "./Map.scss";

mapboxgl.workerClass = MapboxWorker;
mapboxgl.accessToken =
  "pk.eyJ1IjoiZmxpa2tyIiwiYSI6ImNrbmVyYXIxcTJpemIzMXBoZ3JnMDZycDIifQ.5EneSaLoyECEbvPpp2XRxA";

export default function Map() {
  const mapContainer = useRef();
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
    return () => map.remove();
  }, []);

  return (
    <div>
      <div className='map-container' ref={mapContainer}></div>
      <div className='map-overlay'>
        <div className='map-navigator z-depth-5'></div>
      </div>
    </div>
  );
}
