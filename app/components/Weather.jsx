var React = require("react");
var WeatherForm = require("WeatherForm");
var WeatherMessage = require("WeatherMessage");
var ErrorModal = require("ErrorModal");
var openWeatherMap = require("openWeatherMap");
var {browserHistory} = require("react-router");

var Weather = React.createClass({
    
    getInitialState: function() {
        return {
            isLoading: false
        };
    },

    handleSearch: function(location) {
        
        this.setState({
            isLoading: true,
            errorMessage: undefined
        });
        
        openWeatherMap.getTemp(location).then((data) => {
            //through data we can access other information also
            this.setState({
                location:data.name,
                temp: data.main.temp,
                isLoading:false
            });
            
        }, (e) => {
            this.setState({
                isLoading: false,
                //If there is an error it will return the city and temperature of the last previous success
                //We wanna remove the message
                temp:undefined,
                location: undefined,
                errorMessage: e.message
                
            });
        });
    },
    componentDidMount: function() {
        var location = this.props.location.query.location;
        if(location && location.length > 0) {
            this.handleSearch(location);
            browserHistory.push("/")   
        }
    },
    componentWillReceiveProps: function(newProps) {
        var location = newProps.location.query.location;
        if(location && location.length > 0) {
            this.handleSearch(location);
            browserHistory.push("/");   
        }    
    },
    
    render: function () {
        var {isLoading, temp, location, errorMessage} = this.state;
        
        function renderMessage () {
            if(isLoading){
                return <h3 className="text-center">Featching Weather...</h3>;  
                //if temperature is 0, then it is falsy so we need to compare it to null for the statement to be true
            } else if (temp != null && location != null) {
                return <WeatherMessage temp = {temp} location = {location}/>;
            }
        };
        
        function renderError() {
            if(typeof errorMessage === "string") {
                return (
                    <ErrorModal message={errorMessage}/>
                )
            }
        };
        
        return (
            <div>
                <h1 className="text-center page-title">Get Weather</h1>
                
                <WeatherForm onSearch = {this.handleSearch}/>
                {renderMessage()}
                {renderError()}
            </div>
        );
    }
});

module.exports = Weather;