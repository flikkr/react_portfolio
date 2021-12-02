import mapboxgl from "mapbox-gl/dist/mapbox-gl-csp";

function createPopUp(currentFeature) {
  var popup = new mapboxgl.Popup({ closeOnClick: false })
    .setLngLat(currentFeature.geometry.coordinates)
    .setHTML(
      "<h3>Sweetgreen</h3>" +
        "<h4>" +
        currentFeature.properties.address +
        "</h4>"
    )
    .addTo(map);
}
