'use strict';
var sql = require('./db')

//Sample object constructor
var Sample = function(sample) {
    this.title = sample.title;
    this.created_at = new Date();
    this.updated_at = new Date();
}

Sample.createSample = async function (sample) {
    //should validate input data
    var newSample = new Sample(sample)
    //do insert new record
    try {
        let result = await sql.query("INSERT INTO sample_tbl SET ?", newSample);
    } catch (error) {
        
    }
    return result
}

async function samplePost(info) {
    try {
        var result = await sql.query("INSERT INTO sample_tables SET ?", [info]);
        return result;
    } catch (error) {
        console.error(error)
        return null
    }
}