$(function () {
    /*mapbox map below*/
    mapboxgl.accessToken = MAPBOX_API_TOKEN;
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: [-74.5, 40], // starting position [lng, lat]
        zoom: 15, // starting zoom
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
            weatherForecast(latLng.lng, latLng.lng)
            map.flyTo({center: latLng, zoom: 9});


        })
    })

    function weatherForecast(lng, lat){
        $.get("https://api.openweathermap.org/data/2.5/forecast", {
            APPID: OPEN_WEATHER_APPID,
            lat: 29.423017,
            lon: -98.48527,
            units: "imperial"
        }).done(function(data) {
            console.log(data)
                 //data.coord.lan/lon
                $(".currentWeather").append(`
                    <div class="card-header text-center"><h3>${data.city.name}</h3></div>
                <ul class="list-group>
                    <li class="list-group-item">High ${data.list[0].main.temp_max}<span>&#8457;</span>/ Low ${data.list[0].main.temp_min}<span>&#8457;</span></li>
                    <li class="list-group-item"><img src="https://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png"></li
                    <li class="list-group-item">Weather: ${data.list[0].weather[0].description}</li>
                    <li class="list-group-item">Humidity: ${data.list[0].main.humidity}</li>
                    <li class="list-group-item">Wind Speed: ${data.list[0].main.wind.speed}${windCardinalDirection(data.list[0].wind.deg)}</li>
                    <li class="list-group-item">Pressure: ${data.list[0].main.pressure}</li>
                </ul>`);

            for (let i = 0; i < data.list.length; i++) {
                let dateAndTime = data.list[i].dt_txt;
                let dateTime = dateAndTime.split(' ');
                if (dateTime[1] === "06:00:00") {
                    $(".dayCardsTwo").append(`
                    <div class="card-header text-center"><h3>${data.city.name}</h3></div>
                <ul class="list-group>
                    <li class="list-group-item">High ${data.list[i].main.temp_max}<span>&#8457;</span>/ Low ${data.list[i].main.temp_min}<span>&#8457;</span></li>
                    <li class="list-group-item"><img src="https://openweathermap.org/img/w/${data.list[i].weather[0].icon}.png"></li
                    <li class="list-group-item">Weather: ${data.list[i].weather[0].description}</li>
                    <li class="list-group-item">Humidity: ${data.list[i].main.humidity}</li>
                    <li class="list-group-item">Wind Speed: ${data.list[i].main.wind.speed}${windCardinalDirection(data.list[i].wind.deg)}</li>
                    <li class="list-group-item">Pressure: ${data.list[i].main.pressure}</li>
                </ul>`);
                }
                weatherForecast();
        }
})}});