const ssnModel = require('../model/ssn');

module.exports = {
    updateVerify,
    sampleGet,
}

function updateVerify(req, res) {
    if (!req.body || !req.body.uid || !req.body.status) {
        res.status(403).json({ error_code: 403, message: 'Params missing' })
    } else {
        if (req.body.uid <= 0) {
            return res.status(403).json({ error_code: 'ERR_INVALID_001', message: 'Mã người dùng không hợp lệ' })
        } else if (req.body.status <= 0 || req.body.status > 2) {
            return res.status(403).json({ error_code: 'ERR_INVALID_002', message: 'Trạng thái xác minh không hợp lệ' })
        }


        res.json({ error_code: 0, message: 'success' })
    }

    // ssnModel.samplePost(req.body.info).then(result => {
    //     if (result) {
    //         return res.json({ error_code: 0, message: "success" })
    //     } else {
    //         return res.json({ error_code: 1, message: "Failed" })
    //     }
    // })

}

function sampleGet(req, res) {
    res.json({ error_code: 0, message: "success" })
}