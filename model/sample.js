'use strict';
var sql = require('./db')

module.exports = {
    samplePost,
    sampleGet,
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

function sampleGet() {
    return [{ "data": "sample data" }];
}