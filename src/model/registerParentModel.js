const SendOtp = require('sendotp-promise');
var connection = require('../db/pgconnection');

const sendOtp = new SendOtp('331244AX9lq8GR5ed89db4P1');
//917903980985

var registerParentModel = {

    checkMobileNumber : async (mobileNumber) => {
        try{
            const pgsql = `select primary_number, registered, status from parent_master where primary_number = '${mobileNumber.mobile_number}'`;
            const response = await connection.query(pgsql);    
            if(response.rows.length){
                if(response.rows[0].status == 'inactive'){
                    // =============Send otp===============
                    const result = await sendOtp.send(response.rows[0].primary_number, "SMSIND")
                    if (result.type === 'success') {
                        console.log('OTP code sent');
                        console.log(result)
                        // return result;
                        return {
                            status : 200,
                            success : true,
                            message : 'Otp sent Successfully',
                        };
                    } else {
                        return {
                            status : 500,
                            success : false,
                            message : 'Failed to send otp.',
                        };
                    }   
                }else if(response.rows[0].status === 'active'){
                    return {
                        status : 500,
                        success : true,
                        message : 'Mobile number is already Active.'
                    };
                }
            }
            else
                return {
                    status : 500,
                    success : true,
                    message : "Mobile number is not registered in db."
                };
        }
        catch(e){
            console.error('Error in model',e);
            return 'Something went wrong...';
        }
    }
}

module.exports = registerParentModel;