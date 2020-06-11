const router = require('express').Router();
const registerParentRepository = require('../repository/registerParentRepository');

router.post('/sendOtp', async (req, res) => {
    try{
        const result = await registerParentRepository.checkMobileNumber(req.body);
        res.send(result).status(200);
    }catch(err){
        throw new Error(err);
    }
});

module.exports = router;