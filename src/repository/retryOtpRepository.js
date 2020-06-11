const retryOtpModel = require('../model/retryOtpModel');

const retryOtpRepository = {
    retryOtp : async (mobilNumber) => {
        try {
            const result = await retryOtpModel.retryOtp(mobilNumber);
            return result;      
        } catch (err) {
            return err;
        }
    }
}

module.exports = retryOtpRepository;