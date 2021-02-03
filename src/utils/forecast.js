const request = require('request');

const forecast = (latitude, longitude, units, callback) => {    
    const url='http://api.weatherstack.com/current?access_key=64da51f1546599415f1b3879ced5ab41&query='+ latitude +',' + longitude + '&units='+ units;
    request({url,json:true},(error,{body})=>{
        
        if(error) {
            callback('Unable to connect to the weather service!',undefined);
        } else if (body.error) {
            callback('Unable to find the location!',undefined);
        } else {
            callback(undefined,{
                weatherDescription: body.current.weather_descriptions[0] + ', the outside temperature is ' + body.current.temperature +  ' degrees celsius, feels like ' + body.current.feelslike + '.'
                    //weatherDescription: body.current.weather_descriptions[0], 
                    //currentTemperature: body.current.temperature,
                    //feelslike:body.current.feelslike
                })
        }
    });
}

module.exports = forecast;