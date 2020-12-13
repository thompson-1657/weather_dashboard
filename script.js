


$(".btn-primary").on("click", function () {
    var citySearch = $('#entered-city').val();
    console.log(citySearch)
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + citySearch + "&cnt=5&appid=a1d5f0111e093d1e307cd296b74d63f2";


    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response)
        $(".current-city").html(response.name)  //add date
        $(".current-humidity").text("Humidity: " + response.main.humidity + " %")
        $(".current-wind").text("Wind Speed: " + response.wind.speed + " MPH")

        var tempF = (response.main.temp - 273.15) * 1.80 + 32;
        $(".current-temp").text("Temperature: " + tempF.toFixed(1) + " °F")

        var searchHistory = $("#entered-city").val()
        localStorage.setItem("city", searchHistory)


        var lat = response.coord.lat;
        var lon = response.coord.lon;
        console.log(lat);
        console.log(lon);

        var queryURL2 = "http://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + lon + "&appid=a1d5f0111e093d1e307cd296b74d63f2"

        $.ajax({
            url: queryURL2,
            method: "GET",
        }).then(function (uvResponse) {
            var uvIndex = uvResponse.value;
            console.log(typeof uvIndex);
            $(".current-uv").text("UV Index: " + uvIndex);

            if (uvIndex < 3) {
                $(".current-uv").css("color", "green")
            } else if (uvIndex >= 3 && uvIndex <= 5.99) {
                $(".current-uv").css("color", "orange")
            } else {
                $(".current-uv").css("color", "red")
            }
        });








    });



















});



