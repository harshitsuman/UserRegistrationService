var connection = require('../db/pgconnection');

var setMpinModel = {

    setMpin : async (value) => {
        try{
            var pgsql = `update parent_master set mpin = '${value.mPin}' where primary_number = '${value.mobileNumber}'`; 
            const pgsqlStatus = `update parent_master set status = 'active', registered = true where primary_number = '${value.mobileNumber}'`; 
            await connection.query(pgsql);
            await connection.query(pgsqlStatus);

            return {
                status : 200,
                success : true,
                message : 'mPin created successfully'
            };
        }
        catch(err){
            console.log('Error inside the setMpinMode',err);
        }
    }
}

module.exports = setMpinModel;