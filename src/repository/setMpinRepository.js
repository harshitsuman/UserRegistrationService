const setMpinModel = require('../model/setMpinModel');

const setMpinRepository = {
    setMpin : async (value) => {
        try {
            const result = await setMpinModel.setMpin(value);
            return result;
        } catch (err) {
            return err;
        }
    }
}

module.exports = setMpinRepository;