import React, { useState, useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl/dist/mapbox-gl-csp";
// eslint-disable-next-line import/no-webpack-loader-syntax
import MapboxWorker from "worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker";
import MapNavigator from "../components/MapNavigator/MapNavigator";
// import "react-router-dom";
import story from "../models/story";

import "./Map.scss";

mapboxgl.workerClass = MapboxWorker;
mapboxgl.accessToken =
  "pk.eyJ1IjoiZmxpa2tyIiwiYSI6ImNrbmVyYXIxcTJpemIzMXBoZ3JnMDZycDIifQ.5EneSaLoyECEbvPpp2XRxA";

function Map() {
  const mapContainer = useRef("");
  const map = useRef(null);
  const [index, setIndex] = useState(0);
  const [lat, setLat] = useState(story.events[0].coordinates[0]); //story.events[0].coordinates[1]
  const [lng, setLng] = useState(story.events[0].coordinates[1]); //story.events[0].coordinates[0]
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
    return () => map.current.remove();
  }, []);

  return (
    <div>
      <div className='map-container' ref={mapContainer}></div>
      <div className='map-overlay'>
        <div>{index}</div>
        <button onClick={() => navTo()}>test</button>
        <MapNavigator
          onBackPress={() => setIndex(index - 1)}
          onForwardPress={() => setIndex(index + 1)}
        />
      </div>
    </div>
  );

  function navTo() {
    console.log(map);
    map.current.flyTo({
      // These options control the ending camera position: centered at
      // the target, at zoom level 9, and north up.
      center: [74.5, 40],
      zoom: 9,
      bearing: 0,

      // These options control the flight curve, making it move
      // slowly and zoom out almost completely before starting
      // to pan.
      speed: 0.2, // make the flying slow
      curve: 1, // change the speed at which it zooms out

      // This can be any easing function: it takes a number between
      // 0 and 1 and returns another number between 0 and 1.
      easing: function (t) {
        return t;
      },

      // this animation is considered essential with respect to prefers-reduced-motion
      essential: true,
    });
  }
}

export default Map;
