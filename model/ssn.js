'use strict';
var sql = require('./db')

//SSN object constructor
var Kyc = function(kyc) {
    this.created_at = new Date();
}

module.exports = {
    Kyc,
    samplePost,
}

async function samplePost(info) {
    try {
        var result = await sql.query("INSERT INTO sample_tables SET ?", [info]);
        return result
    } catch (error) {
        console.error(error)
        return null
    }
}