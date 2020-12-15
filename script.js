


$(".btn-primary").on("click", function () {
    var citySearch = $('#entered-city').val();
    console.log(citySearch)
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + citySearch + "&appid=a1d5f0111e093d1e307cd296b74d63f2";
    //console.log(queryURL);

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        //console.log(response)
        $(".current-city").html(response.name)
        $(".current-humidity").text("Humidity: " + response.main.humidity + " %")
        $(".current-wind").text("Wind Speed: " + response.wind.speed + " MPH")

        var tempF = (response.main.temp - 273.15) * 1.80 + 32;
        $(".current-temp").text("Temperature: " + tempF.toFixed(1) + " °F")

        var searchHistory = $("#entered-city").val();
        localStorage.setItem("city", searchHistory);
        //console.log(searchHistory);






        var lat = response.coord.lat;
        var lon = response.coord.lon;
        //console.log(lat);
        //console.log(lon);

        var queryURL2 = "http://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + lon + "&appid=a1d5f0111e093d1e307cd296b74d63f2"

        $.ajax({
            url: queryURL2,
            method: "GET",
        }).then(function (uvResponse) {
            var uvIndex = uvResponse.value;
            // console.log(typeof uvIndex);
            $(".current-uv").text("UV Index: " + uvIndex);

            if (uvIndex < 3) {
                $(".current-uv").css("color", "green")
            } else if (uvIndex >= 3 && uvIndex <= 5.99) {
                $(".current-uv").css("color", "orange")
            } else {
                $(".current-uv").css("color", "red")
            }

            var cnt = 6
            var queryURLFiveDay = "https://api.openweathermap.org/data/2.5/forecast?&units=imperial&cnt=" + cnt + "&appid=a1d5f0111e093d1e307cd296b74d63f2&q=" +
                citySearch


            $.ajax({
                url: queryURLFiveDay,
                method: "GET",
            }).then(function (fiveDayResponse) {
                //console.log(fiveDayResponse);



                var fiveDay = fiveDayResponse.list
                //console.log(fiveDay);
                for (var i = 0; i < fiveDay.length; i++) {
                    //console.log(fiveDay[i]);

                    $(".for-temp1").text("Temp: " + fiveDay[1].main.temp + " °F")
                    $(".for-humid1").text("Humidity: " + fiveDay[1].main.humidity + " %")

                    $(".for-temp2").text("Temp: " + fiveDay[2].main.temp + " °F")
                    $(".for-humid2").text("Humidity: " + fiveDay[2].main.humidity + " %")

                    $(".for-temp3").text("Temp: " + fiveDay[3].main.temp + " °F")
                    $(".for-humid3").text("Humidity: " + fiveDay[3].main.humidity + " %")

                    $(".for-temp4").text("Temp: " + fiveDay[4].main.temp + " °F")
                    $(".for-humid4").text("Humidity: " + fiveDay[4].main.humidity + " %")

                    $(".for-temp5").text("Temp: " + fiveDay[5].main.temp + " °F")
                    $(".for-humid5").text("Humidity: " + fiveDay[5].main.humidity + " %")
                }
            })


        });







    });



















});



