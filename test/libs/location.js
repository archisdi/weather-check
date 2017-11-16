const test = require('ava');
const locationRepo = require('../../libs/location-repo');

test('Search location data by name', async t => {
    await locationRepo.search('float')
        .then(res => {
            t.is(res.name, 'Floating Market Lembang')
        })
});