import L from 'leaflet';
// import './style.css'
import data from '../data.json'


const map = L.map('map').setView([40.237, -111.648], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var dataStyle = {
  "color": "#ff7800",
    "weight": 5,
    "opacity": 0.65
};

console.log(data)

L.geoJSON(data, {
  style: dataStyle,
  onEachFeature: function (feature, layer) {
    if (feature.properties) {
      layer.bindPopup(Object.keys(feature.properties).map(function(k) {
        return k + ": " + feature.properties[k];
      }).join("<br />"));
    }
  }
}).addTo(map);