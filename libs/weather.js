const axios = require('axios');
const Promise = require('bluebird');

const check = Promise.coroutine(function* ({ lat, lng }) {
    return yield axios.get(`https://api.darksky.net/forecast/ab2a079d6d2674083e4726a23e65b7fc/${lat},${lng}`)
        .then(res => res.data.currently)
        .catch(err => 'an error ocured')
});

module.exports = { check }