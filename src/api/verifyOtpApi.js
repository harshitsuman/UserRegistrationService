const router = require('express').Router();
const verifyOtpRepository = require('../repository/verifyotpRepository');

router.post('/verifyOtp', async (req, res) => {
    try{
        const result = await verifyOtpRepository.verifyOtp(req.body);
        res.send(result).status(200);
    }catch(err){
        res.send(err).status(404);
    }
});

module.exports = router;