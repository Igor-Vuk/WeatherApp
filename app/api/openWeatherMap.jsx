var axios = require("axios");

const OPEN_WEATHER_MAP_URL = ""



module.exports = {
    getTemp: function(location) {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
    
        return axios.get(requestUrl).then(function(res) {
            if(res.data.cod && res.data.message) {
                throw new Error(res.data.message);
            } else {
                return res.data;
            }
        }, function(err) {
            throw new Error("Unable to fetch the data");
        });
    }
};
