var axios = require("axios");

const OPEN_WEATHER_MAP_URL = "http://api.openweathermap.org/data/2.5/weather?appid=07334a5d095804e956b9c6ecba2d0a06&units=metric"



module.exports = {
    getTemp: function(location) {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
    
        return axios.get(requestUrl).then(function(res) {
            if(res.data.cod && res.data.message) {
                throw new Error("Unable to fetch weather");
            } else {
                return res.data;
            }
        }, function(res) {
            throw new Error("Unable to fetch weather");
        });
    }
};