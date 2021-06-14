
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
            // console.log(data);
            buildDOMObjects(filterWeather(data), filterLocation(data));
        }
    });
}


function filterWeather(data){
    let array = [];

    for(let i = 0; i < data.list.length; i++){
        if(i % 8 === 0){
            array.push(data.list[i]);
        }
    }
    return array
}


function filterLocation(data){
    return data.city;

}


