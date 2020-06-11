const registerParentModel = require('../model/registerParentModel');

const registerParentRepository = {
    checkMobileNumber : async (mobilNumber) => {
        try {
            const result = await registerParentModel.checkMobileNumber(mobilNumber);
            return result;      
        } catch (err) {
            return err;
        }
    }
}

module.exports = registerParentRepository;