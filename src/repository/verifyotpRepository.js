const verifyOtpModel = require('../model/verifyotpModel');

const verifyOtpRepository = {
    verifyOtp : async (value) => {
        try {
            const result = await verifyOtpModel.verifyOtp(value);
            return result;      
        } catch (err) {
            return err;
        }
    }
}

module.exports = verifyOtpRepository;