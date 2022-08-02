const mongoose = require('mongoose');
const conn = mongoose.connect(process.env.CONNECTIONSTRING);

const livsmedelSchema = new mongoose.Schema({
    vara: 'string',
    kj: 'number',
    kcal: 'number',
    fett: 'number',
    kolhydrat: 'number',
    protein: 'number',
    salt: 'number'
});

const Livsmedel = mongoose.model('Livsmedel', livsmedelSchema);

module.exports = Livsmedel;