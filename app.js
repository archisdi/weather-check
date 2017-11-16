const address = process.argv[2] || 'jakarta';
const geo = require('./libs/geo');
const weather = require('./libs/weather');
const location = require('./libs/location-repo');

location.search(address)
.then(address => {
    console.info(`Name : ${address.name}`)
    return geo.addressToCoordinates(address.name)
})
.then(res => {
    console.info(`Address : ${res.formatted_address}`)
    return weather.check(res.geometry.location)
})
.then(res => {
    console.info(`Summary : ${res.summary}`)
    console.info(`Temperature : ${res.temperature} F`)
    console.info(`Humidity : ${res.humidity}`)
})
.catch(err => console.log(err));

