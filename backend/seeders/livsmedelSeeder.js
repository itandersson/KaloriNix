//If CONNECTIONSTRING is not assigned
if (process.env.CONNECTIONSTRING == null) { process.env.CONNECTIONSTRING = 'mongodb://root:password@localhost:27017/livsmedel?authSource=admin'; }

const mongoose = require('mongoose');
const Livsmedel = require("../models/livsmedelModel");

const seedLivsmedel = [
    {
        vara: "socker",
        kj: 1700,
        kcal: 400,
        fett: 0,
        kolhydrat: 100,
        protein: 0,
        salt: 0
    },
    {
        vara: "kakao",
        kj: 1647,
        kcal: 394,
        fett: 22,
        kolhydrat: 11,
        protein: 24,
        salt: 0.02
    }];

mongoose.connect(process.env.CONNECTIONSTRING, {
    useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Mongo connection open!');
    })
    .catch((err) => {
        console.log(err);
    });

const seedDB = async () => {
    await Livsmedel.deleteMany({});
    await Livsmedel.insertMany(seedLivsmedel);
};

seedDB().then(() => {
    mongoose.connection.close();
});