const test = require('ava');
const weather = require('../../libs/weather');

test('Get weather data based on location', async t => {
    let coor = { lat: -6.188592, lng: 106.824145 }
    await weather.check(coor)
        .then(res => t.pass())
});