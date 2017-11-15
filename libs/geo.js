const axios = require('axios');

function addressToCoordinates(address) {
    const convert = decodeURI(address)
    return new Promise((resolve, reject) => {
        axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${convert}`)
            .then(res => {
                if(res.data.status === "OK"){
                    resolve(res.data.results[0])
                }else{
                    reject('cannot retrive address data')
                }
            })
            .catch(err => reject(err))
    })
}

module.exports = { addressToCoordinates }