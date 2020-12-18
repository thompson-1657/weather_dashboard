
$(".btn-primary").on("click", function () {
    var citySearch = $('#entered-city').val();
    console.log(citySearch)
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + citySearch + "&appid=a1d5f0111e093d1e307cd296b74d63f2";


    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response)
        $(".current-city").html(response.name + " " + time)
        $(".current-humidity").text("Humidity: " + response.main.humidity + " %")
        $(".current-wind").text("Wind Speed: " + response.wind.speed + " MPH")

        var tempF = (response.main.temp - 273.15) * 1.80 + 32;
        $(".current-temp").text("Temperature: " + tempF.toFixed(1) + " °F")

        var searchHistory = $("#entered-city").val();
        localStorage.setItem("city", searchHistory);


        var weatherIcon = $("<img>");
        weatherIcon.attr(
            "src",
            "https://openweathermap.org/img/w/" + response.weather[0].icon + ".png"
        );
        $("#wicon0").empty();
        $("#wicon0").append(weatherIcon);




        var lat = response.coord.lat;
        var lon = response.coord.lon;


        var queryURL2 = "http://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + lon + "&appid=a1d5f0111e093d1e307cd296b74d63f2"

        $.ajax({
            url: queryURL2,
            method: "GET",
        }).then(function (uvResponse) {
            var uvIndex = uvResponse.value;

            $(".current-uv").text("UV Index: " + uvIndex);

            if (uvIndex < 3) {
                $(".current-uv").css("color", "green")
            } else if (uvIndex >= 3 && uvIndex <= 5.99) {
                $(".current-uv").css("color", "orange")
            } else {
                $(".current-uv").css("color", "red")
            }

            var cnt = 50
            var queryURLFiveDay = "https://api.openweathermap.org/data/2.5/forecast?&units=imperial&cnt=" + cnt + "&appid=a1d5f0111e093d1e307cd296b74d63f2&q=" +
                citySearch


            $.ajax({
                url: queryURLFiveDay,
                method: "GET",
            }).then(function (fiveDayResponse) {
                console.log(fiveDayResponse);






                var fiveDay = fiveDayResponse.list
                console.log(fiveDay);



                var weatherIcon2 = $("<img>");
                weatherIcon2.attr(
                    "src",
                    "https://openweathermap.org/img/w/" + fiveDay[1].weather[0].icon + ".png"
                );
                $("#wicon2").empty();
                $("#wicon2").append(weatherIcon2)

                var weatherIcon3 = $("<img>");
                weatherIcon3.attr(
                    "src",
                    "https://openweathermap.org/img/w/" + fiveDay[8].weather[0].icon + ".png"
                );
                $("#wicon3").empty();
                $("#wicon3").append(weatherIcon3)

                var weatherIcon4 = $("<img>");
                weatherIcon4.attr(
                    "src",
                    "https://openweathermap.org/img/w/" + fiveDay[16].weather[0].icon + ".png"
                );
                $("#wicon4").empty();
                $("#wicon4").append(weatherIcon4)

                var weatherIcon5 = $("<img>");
                weatherIcon5.attr(
                    "src",
                    "https://openweathermap.org/img/w/" + fiveDay[24].weather[0].icon + ".png"
                );
                $("#wicon5").empty();
                $("#wicon5").append(weatherIcon5)

                var weatherIcon6 = $("<img>");
                weatherIcon6.attr(
                    "src",
                    "https://openweathermap.org/img/w/" + fiveDay[32].weather[0].icon + ".png"
                );
                $("#wicon6").empty();
                $("#wicon6").append(weatherIcon6)




                $(".for-temp1").text("Temp: " + fiveDay[1].main.temp + " °F")
                $(".for-humid1").text("Humidity: " + fiveDay[1].main.humidity + " %")


                $(".for-temp2").text("Temp: " + fiveDay[8].main.temp + " °F")
                $(".for-humid2").text("Humidity: " + fiveDay[8].main.humidity + " %")


                $(".for-temp3").text("Temp: " + fiveDay[16].main.temp + " °F")
                $(".for-humid3").text("Humidity: " + fiveDay[16].main.humidity + " %")


                $(".for-temp4").text("Temp: " + fiveDay[24].main.temp + " °F")
                $(".for-humid4").text("Humidity: " + fiveDay[24].main.humidity + " %")


                $(".for-temp5").text("Temp: " + fiveDay[32].main.temp + " °F")
                $(".for-humid5").text("Humidity: " + fiveDay[32].main.humidity + " %")






            })


        });

    });
    var time = moment().format('L');

    var time2 = moment().add(1, 'days').format('L');
    $(".current-date2").html(time2)

    var time3 = moment().add(2, 'days').format('L');
    $(".current-date3").html(time3)

    var time4 = moment().add(3, 'days').format('L');
    $(".current-date4").html(time4)

    var time5 = moment().add(4, 'days').format('L');
    $(".current-date5").html(time5)

    var time6 = moment().add(5, 'days').format('L');
    $(".current-date6").html(time6)

});



