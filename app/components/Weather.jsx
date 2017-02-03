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
    
    // handleSearch: function(location) {
    //     var that = this;
        
    //     this.setState({isLoading: true});
    //     openWeatherMap.getTemp(location).then(function(data) {
    //         //through data we can access other information also
    //         that.setState({
    //             location:data.name,
    //             temp: data.main.temp,
    //             isLoading:false
    //         });
            
    //     }, function(errorMessage) {
    //         that.setState({
    //             isLoading: false,
    //             //If there is an error it will return the city and temperature of the last previous success
    //             //We wanna remove the message
    //             temp:null,
    //             location: null
    //         });
    //         alert(errorMessage);
    //     });
    // },
    
    
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
                return <h3>Featching Weather...</h3>;  
                //if temperature is 0, then it is falsy so we need to compare it to null for the statement to be true
            } else if (temp != null && location != null) {
                return <WeatherMessage temp = {temp} location = {location}/>;
            }
        }
        
        return (
            <div>
                <h3>Weather Component</h3>
                
                <WeatherForm onSearch = {this.handleSearch}/>
                {renderMessage()}
            </div>
        );
    }
});

module.exports = Weather;