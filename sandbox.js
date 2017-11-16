const locationRepo = require('./libs/location-repo');

locationRepo.search(process.argv[2] || 1)
    .then(res => {
        console.log(JSON.stringify(res, undefined, 2));
    })
    .catch(err => {
        console.log(err);
    });