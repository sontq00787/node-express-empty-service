const sampleModel = require('../model/sample');

module.exports = {
    samplePost,
    sampleGet,
}

function samplePost(req, res) {
    sampleModel.samplePost(req.body.info).then(result => {
        if (result) {
            return res.json({ error_code: 0, message: "success" })
        } else {
            return res.json({ error_code: 1, message: "Failed" })
        }
    })

}

function sampleGet(req, res) {
    res.json({ error_code: 0, message: "success" })
}