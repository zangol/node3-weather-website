
const request = require('request')

const forecast = (latitude, longitude, callback) => {
    
    const url = 'http://api.weatherstack.com/current?access_key=2839d0da0ea509e88a0e68613a1d917d&query=' + latitude + ',' + longitude + '&units=m'

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather services!', undefined)
        } else if (body.error) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, body.location.name + ' ' + body.location.country + ' temperature is ' + body.current.temperature + ', feels like ' + body.current.feelslike)
        }
    })
}

module.exports = forecast