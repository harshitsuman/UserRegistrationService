const SendOtp = require('sendotp-promise');
var connection = require('../db/pgconnection');

const sendOtp = new SendOtp('331244AX9lq8GR5ed89db4P1');

var registerParentModel = {

    retryOtp : async (mobileNumber) => {
        try{
            const pgsql = `select primary_number, registered, status from parent_master where primary_number = '${mobileNumber.mobile_number}'`;
            const response = await connection.query(pgsql);    
            if(response.rows.length){
                if(response.rows[0].status == 'inactive'){
                    // =============Send otp again===============
                    console.log(response.rows[0].primary_number);
                    const result = await sendOtp.retry(response.rows[0].primary_number, false)
                    console.log(result);
                    if (result.type === 'success') {
                        console.log('OTP code sent again');
                        return {
                            status : 200,
                            success : true,
                            message : 'Otp code sent again'
                        };
                    } else {
                        console.log('Failed to sent OTP');
                        return {
                            status : 500,
                            success : false,
                            message : 'Failed to sent OTP'
                        }
                    }    
                }else if(response.rows[0].status === 'active'){
                    return {
                        status : 500,
                        success : false,
                        message : 'Mobile number is already active'
                    } 
                }
            }
            else
                return {
                    status : 500,
                    success : false,
                    message : "Mobile number is not valid or not available in db."
                }
        }
        catch(e){
            console.error('Error in model',e);
            return 'Something went wrong...';
        }
    }
}

module.exports = registerParentModel;