$(function (){
    /*mapbox map below*/
    mapboxgl.accessToken = MAPBOX_API_TOKEN;
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/outdoors-v11', // style URL
        center: [11.255, 43.77], // starting position [lng, lat]
        zoom: 13, // starting zoom
        projection: 'globe' // display the map as a 3D globe
    });
    map.on('style.load', () => {
        map.setFog({}); // Set the default atmosphere style
    });
    map.setZoom(9);
    map.setCenter([-98.5020, 29.4756]);

//markers
    map.on('click', function (event){
        $(".mapboxgl-marker").remove();
        console.log(event);
        let clickAreaLngLat = event.lngLat;
        console.log(event.lngLat.lng, event.lngLat.lng, event.id);
        const marker = new mapboxgl.Marker({})
            .setLngLat([event.lngLat.lng, event.lngLat.lat])
            .addTo(map);
        $(".dayCards").empty()
        getForecastAndPrint(event.lngLat.lng, event.lngLat.lat);
        $(".currentWeather").empty()
        getCurrentForecastAndPrint(event.lngLat.lng, event.lngLat.lat);
    })

   /////search button
    $("button").click(function (e){
        e.preventDefault();
        let citySearch = $(".submitForm").val();
        console.log(citySearch);
        $(".mapboxgl-marker").remove();
        geocode(citySearch, MAPBOX_API_TOKEN).then(function (data){
            console.log(data);
            let latLng = {
                lat: data[1],
                lng: data[0]
            };
            $(".weatherSearch").remove();
            const favsMarker = new mapboxgl.Marker().setLngLat([latLng.lng, latLng.lat]).addTo(map);

            $(".currentWeather").empty();
            getCurrentForecastAndPrint(latLng.lng, latLng.lat);



            map.flyTo({center: latLng, zoom: 9});


            })
    })

            // console.log(forcast(citySearchData))
            // $(".submitForm").on("dragend", () => ([marker.getLngLat().lat, marker.getLngLat().lng]));


    })


//////below wind direction function
        function windCardinalDirection(degrees) {
            let cardinalDirection = '';
            if ((degrees > 348.75 && degrees <= 360) || (degrees >= 0 && degrees <= 11.25)) {
                cardinalDirection = "N";
            } else if (degrees > 11.25 && degrees <= 33.75) {
                cardinalDirection = "NNE";
            } else if (degrees > 33.75 && degrees <= 56.25) {
                cardinalDirection = "NE";
            } else if (degrees > 56.25 && degrees <= 78.75) {
                cardinalDirection = "ENE";
            } else if (degrees > 78.75 && degrees <= 101.25) {
                cardinalDirection = "E";
            } else if (degrees > 101.25 && degrees <= 123.75) {
                cardinalDirection = "ESE";
            } else if (degrees > 123.75 && degrees <= 146.25) {
                cardinalDirection = "SE";
            } else if (degrees > 146.25 && degrees <= 168.75) {
                cardinalDirection = "SSE";
            } else if (degrees > 168.75 && degrees <= 191.25) {
                cardinalDirection = "S";
            } else if (degrees > 191.25 && degrees <= 213.75) {
                cardinalDirection = "SSW";
            } else if (degrees > 213.75 && degrees <= 236.25) {
                cardinalDirection = "SW";
            } else if (degrees > 236.25 && degrees <= 258.75) {
                cardinalDirection = "WSW";
            } else if (degrees > 258.75 && degrees <= 281.25) {
                cardinalDirection = "W";
            } else if (degrees > 281.25 && degrees <= 303.75) {
                cardinalDirection = "WNW";
            } else if (degrees > 303.75 && degrees <= 326.25) {
                cardinalDirection = "NW";
            } else if (degrees > 326.75 && degrees <= 348.75) {
                cardinalDirection = "NNW";
            }
            return cardinalDirection;
        }


        function appendLeadingZeroes(n) {
            if (n <= 9) {
                return "0" + n;
            }
            return n;
        }

        const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

        function formatTime(timeStamp) {
            let dateTime = new Date(timeStamp * 1000);
            let year = dateTime.getFullYear();
            let month = months[dateTime.getMonth()];
            let day = dateTime.getDate();
            let hour = appendLeadingZeroes(dateTime.getHours());
            let minutes = appendLeadingZeroes(dateTime.getMinutes());
            let seconds = appendLeadingZeroes(dateTime.getSeconds());
            let formattedDateTime = month + " " + day + " " + year + " " + hour + ":" + minutes + ":" + seconds;
            return formattedDateTime;
        }


        function getForecastAndPrint(lng, lat) {
            console.log("inside getForecastAndPrint");
                  $.get("https://api.openweathermap.org/data/2.5/forecast", {
                      APPID: OPEN_WEATHER_APPID,
                      lat: lat,
                      lon: lng,
                      units: "imperial"
                  }).done(function (data) {
                      console.log('data follows:');
                      console.log(data)
                      console.log('data.city.population follows:');
                      console.log(data.city.population);
                      console.log('data.list follows:');
                      console.log(data.list[0].dt_txt);
                      ///looping through dates to get the days at 6am in the morning;
                      for (let i = 0; i < data.list.length; i++) {
                          let dateAndTime = data.list[i].dt_txt;
                          let dateTime = dateAndTime.split(' ');
                          if (dateTime[1] === "06:00:00") {
                              console.log("inside dateTime if statement");
                              $(".dayCards").append(`
              <div class="card border-dark text-center" style="max-width: 20rem;">
                  <div class="card-body card border-dark">
                      <h4 class="card-title">${dateTime[0]}</h4>
                      <p class="card-text">
                      <p><img src="https://openweathermap.org/img/w/${data.list[i].weather[0].icon}.png"</p>
                      High ${data.list[i].main.temp_max}<span>&#8457;</span>/ Low ${data.list[i].main.temp_min}<span>&#8457;</span>                  
                      <br>Weather:${data.list[i].weather[0].description}
                      <br>Humidity: ${data.list[i].main.humidity}
                      <br>Wind: ${data.list[i].wind.speed} ${windCardinalDirection(data.list[i].wind.deg)}
                      <br>Pressure: ${data.list[i].main.pressure}                     
                     </p>
                </div>
                      </div>`)
                          }
                      }

                  });
        }

        getForecastAndPrint(-98.48527, 29.423017);


    function getCurrentForecastAndPrint(lng, lat) {
        $.get("https://api.openweathermap.org/data/2.5/weather", {
            APPID: OPEN_WEATHER_APPID,
            lat: lat,
            lon: lng,
            units: "imperial"
        }).done(function (data) {
            console.log("current weather:");
            console.log(data);
            console.log(data.main.temp);
            console.log(data.wind.speed);
            console.log(data.weather[0].description)
            $(".currentWeather").append
            (`</div>
            <div class="card border-warning mb-3 text-center" style="max-width: 100%">
            <h2>${data.name}</h2><p>The current weather is ${data.main.temp} <span>&#8457;</span>.
            <br>${data.weather[0].description}
            <br>Wind Speed:${data.wind.speed} ${windCardinalDirection(data.wind.deg)}
           </div>`)
        })
    }
    getCurrentForecastAndPrint(-98.48527, 29.423017)