


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

    });




});



