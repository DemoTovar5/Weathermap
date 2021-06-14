
function getForecast(coordinates) {
    $.ajax({
        url: "http://api.openweathermap.org/data/2.5/forecast",
        type: "GET",
        data: {
            APPID: OPEN_WEATHERMAP_TOKEN,
            lat: coordinates[1],
            lon: coordinates[0],
            units: 'imperial',
        },
        success: function(data){
            console.log(data);
            buildDOMObjects(filterWeather(data), filterLocation(data));
        }
    });
}

// on the document load, this function brings up the info of our current location.
$(document).ready(function (event) {
    $.ajax({
        url: "http://api.openweathermap.org/data/2.5/forecast",
        data: {
            APPID:OPEN_WEATHERMAP_TOKEN,
            q: "San Antonio, USA",
            units:"imperial",
        },
        success: function(data) {
            buildDOMObjects(filterWeather(data), filterLocation(data));
        }
    });
});

// Need to make a for loop to get every 8th object from the array.
function filterWeather(data){
    let array = [];

    for(let i = 0; i < data.list.length; i++){
        if(i % 8 === 0){
            array.push(data.list[i]);
        }
    }
    return array
}

// getting the city information
function filterLocation(data){
    return data.city;

}


