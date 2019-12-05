var express = require('express');
var router = express.Router();

var ssnController = require('../controller/sampleController');

router.route('/sample/info').get(function (req, res, next) {
    res.send("Sample info test")
}).post(function (req, res, next) {
    res.send("Sample info test")
})

router.route('/verify')
    .get(ssnController.sampleGet)
    .put(ssnController.updateVerify)

module.exports = router;