var React = require("react");
var WeatherForm = require("WeatherForm");
var WeatherMessage = require("WeatherMessage");
var openWeatherMap = require("openWeatherMap");

var Weather = React.createClass({
    
    getInitialState: function() {
        return {
            isLoading: false
        };
    },

    handleSearch: function(location) {
        
        this.setState({isLoading: true});
        openWeatherMap.getTemp(location).then((data) => {
            //through data we can access other information also
            this.setState({
                location:data.name,
                temp: data.main.temp,
                isLoading:false
            });
            
        }, (errorMessage) => {
            this.setState({
                isLoading: false,
                //If there is an error it will return the city and temperature of the last previous success
                //We wanna remove the message
                temp:null,
                location: null
            });
            alert(errorMessage);
        });
    },
    
    render: function () {
        var {isLoading, temp, location} = this.state;
        
        function renderMessage () {
            if(isLoading){
                return <h3 className="text-center">Featching Weather...</h3>;  
                //if temperature is 0, then it is falsy so we need to compare it to null for the statement to be true
            } else if (temp != null && location != null) {
                return <WeatherMessage temp = {temp} location = {location}/>;
            }
        }
        
        return (
            <div>
                <h1 className="text-center">Get Weather</h1>
                
                <WeatherForm onSearch = {this.handleSearch}/>
                {renderMessage()}
            </div>
        );
    }
});

module.exports = Weather;