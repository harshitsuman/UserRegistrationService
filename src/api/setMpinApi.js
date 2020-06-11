const router = require('express').Router();
const setMpinRepository = require('../repository/setMpinRepository');

router.post('/setMpin', async (req, res) => {
    try{
        const result = await setMpinRepository.setMpin(req.body);
        res.send(result);
    }catch(err){
        res.send(err);
    }
});

module.exports = router;