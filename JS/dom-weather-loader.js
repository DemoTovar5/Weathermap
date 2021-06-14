function buildDOMObjects(forecastdata,location){

    $('#forecast-container').html('');
    $('#city').html('');

    console.log(forecastdata);
    console.log(location);

    let city = location.name;

    for(let i = 0; i < forecastdata.length; i++){


        let temp = forecastdata[i].main.temp;
        let feels = forecastdata[i].main.feels_like;
        let max = forecastdata[i].main.temp_max;
        let low = forecastdata[i].main.temp_min;
        let des = forecastdata[i].weather[0].description;

        let timeDate = forecastdata[i].dt;

        timeDate = new Date(timeDate * 1000);
        let formattedTime = new Date(timeDate).toDateString();

        $('#forecast-container').append(`
            <div class="card">
            <div class="card-body">
             <h5 class="card-title">${formattedTime}</h5>
                <p class="card-text"> <hr>${temp}
                <br><hr>
                ${des}
                <br><hr>
                Feels like ${feels}
                <br><hr>                
                high: ${max}
                <br><hr>
                low: ${low}
                <br>
               </p>
            </div>
         </div>`)
    }

    $('#city').append(`<h3 class="text-center">The Weather In ${city}</h3>`)

}

