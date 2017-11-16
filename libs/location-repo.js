const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const Promise = require('bluebird');

const sequelize = new Sequelize('traver', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false,
    logging: false
});

const Attraction = sequelize.define('attraction', {
    name: Sequelize.STRING,
    address: Sequelize.STRING,
    coordinate: Sequelize.STRING
}, { timestamps: false });

const search = Promise.coroutine(function* (name) {
    return yield Attraction.findAll({ where: { name: { [Op.like]: `%${name}%` } } })
        .then(res => {
            if (!res) throw new Error('Data not found')
            return res[0].dataValues
        })
        .catch(err => err)
        .finally(() => sequelize.close())
});

module.exports = { search }