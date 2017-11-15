const axios = require('axios');

function check({ lat, lng }) {
    return new Promise((resolve, reject) => {
        axios.get(`https://api.darksky.net/forecast/ab2a079d6d2674083e4726a23e65b7fc/${lat},${lng}`)
        .then(res => resolve(res.data.currently))
        .catch(err => reject('an error occured while getting weather data'))
    })
}

module.exports = { check }