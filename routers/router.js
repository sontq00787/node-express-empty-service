var express = require('express');
var router = express.Router();

var sampleController = require('../controller/sampleController');

router.route('/sample/info').get( function(req, res, next) {
    res.send("Insurance info test")
})

router.route('/sample')
    .get(sampleController.samplePost)
    .post(sampleController.samplePost)

module.exports = router;