const test = require('ava');
const geo = require('../../libs/geo');

test('Convert address to coordinate', async t => {
    await geo.addressToCoordinates('jakarta')
        .then(res => t.deepEqual(res.formatted_address, 'Jakarta, Indonesia'))
});


test('Catch error if cant connect to google service', async t => {
    await geo.addressToCoordinates('')
        .catch(err => t.pass())
});