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
  const didMount = useRef(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (didMount.current) fly();
  }, [index]);

  useEffect(() => {
    story.events.forEach((e) => e.coordinates.reverse());
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: story.events[index].coordinates,
      zoom: 9,
    });
    didMount.current = true;

    return () => map.current.remove();
  }, []);

  return (
    <div>
      <div className='map-container' ref={mapContainer}></div>
      <div className='map-overlay'>
        <div>{index}</div>
        <MapNavigator
          onBackPress={() => {
            if (index - 1 < 0) return;
            setIndex(index - 1);
          }}
          onForwardPress={() => {
            if (index + 1 > story.events.length - 1) return;
            setIndex(index + 1);
          }}
        />
      </div>
    </div>
  );

  function fly() {
    map.current.flyTo({
      // These options control the ending camera position: centered at
      // the target, at zoom level 9, and north up.
      center: story.events[index].coordinates,
      zoom: 9,
      bearing: 10,

      // These options control the flight curve, making it move
      // slowly and zoom out almost completely before starting
      // to pan.
      speed: 1.2, // make the flying slow
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
