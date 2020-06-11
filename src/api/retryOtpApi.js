const router = require('express').Router();
const retryOtpRepository = require('../repository/retryOtpRepository');

router.post('/retryOtp', async (req, res) => {
    try{
        const result = await retryOtpRepository.retryOtp(req.body);
        res.send(result);
    }catch(err){
        throw new Error(err);
    }
});

module.exports = router;