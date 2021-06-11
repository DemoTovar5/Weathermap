const mapboxToken = "pk.eyJ1IjoiZGVtb3Q1NCIsImEiOiJja3BzajN0dGcwZjBvMndxdXMwcjZuYmEwIn0.vWfJedDfHBLKR3e9s3R1ig";

mapboxgl.accessToken = mapboxToken;

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10',
    center: [-98.4936, 29.4241],
    zoom: 12
});

