'use strict';
//If CONNECTIONSTRING is not assigned
if (process.env.CONNECTIONSTRING == null) { process.env.CONNECTIONSTRING = 'mongodb://root:password@localhost:27017/livsmedel?authSource=admin'; }

var express = require('express');
var router = express.Router();
const Livsmedel = require("../models/livsmedelModel");

/* GET root. */
router.get('/', (req, res) => {
    res.send('The page does not exist! 404')
})

/* GET param. */
router.get('/:param', function (req, res) {
    const param = req.params.param;

    /* Search for the document */
    Livsmedel.findOne({ vara: param }, function (err, livsmedel) {
        if (err) {
            console.log(err);
        } else if (livsmedel === null) {
            res.json({ api: 'Finns inte i databasen!' });
        } else {
            res.json(livsmedel);
        }
    });
});

module.exports = router;
