const SendOtp = require('sendotp-promise');
var connection = require('../db/pgconnection');

const sendOtp = new SendOtp('331244AX9lq8GR5ed89db4P1');

var verifyOtptModel = {

    verifyOtp : async (value) => {
        try{
            const pgsql = `update parent_master set varified_otp = '${value.otpValue}' where primary_number = '${value.mobileNumber}'`; 
            // const pgsqlStatus = `update parent_master set status = 'active', registered = true where primary_number = '${value.mobileNumber}'`; 
            const response = await sendOtp.verify(value.mobileNumber, value.otpValue)
            console.log(response);
            if (response.type === 'success') {
              console.log('OTP verified successfully');
              await connection.query(pgsql);
            //   await connection.query(pgsqlStatus);
              return {
                status : 200,
                success : true,
                message : 'OTP verified successfully'
            };
            }if (response.type === 'error') {
                return {
                    status : 500,
                    success : false,
                    message : 'OTP mismatched.',
                };
            }
        }
        catch(e){
            return {
                status : 500,
                success : false,
                error : e,
            };
        }
    }
}

module.exports = verifyOtptModel;
