mapboxgl.accessToken = MAPBOX_TOKEN;

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10',
    center: [-98.4936, 29.4241],
    zoom: 12
});

let marker;
let geocoder = setGeocoder();
addGeocodertoMap(geocoder);
mapEvent();

// creates the geocoder
function setGeocoder() {
        return new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            mapboxgl: mapboxgl,
            marker: false
        });
}

// this function adds the geocoder to the map, we also add our popup to this function
function addGeocodertoMap(geocoder){

    map.addControl(geocoder);
    geocoder.on('result', function (event) {
        // console.log(event);
        // console.log(event.result.geometry.coordinates);

        setMarker(event.result.geometry.coordinates);
        marker.setPopup(displayPopUp(event.result.place_name));

        getForecast(event.result.geometry.coordinates);
    })

}

// this function lets us use an existing marker if we have one,
// if we don't we create one.
function setMarker(point){

    if(!marker){
       marker = new mapboxgl.Marker().setLngLat(point).addTo(map);
    } else {
        marker.setLngLat(point)
    }
}

function mapEvent(){

    map.on('click', function (event) {
        setMarker(event.lngLat);

        getForecast([event.lngLat.lng, event.lngLat.lat]);
    })
}

// creates our popup
function displayPopUp(textdetails){
    return new mapboxgl.Popup().setHTML(`<p>${textdetails}</p>`).addTo(map);
}

