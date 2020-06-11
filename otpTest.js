// const SendOtp = require('sendotp');

// const sendOtp = new SendOtp('331244AX9lq8GR5ed89db4P1');
//917903980985
// sendOtp.send("919621774966", "SMSIND", function (error,response) {
//     if(error) {
//         console.log('Error:::',error);
//     }
//     else{
//         console.log(response);
//     }
//   });

// const otp =  Math.floor(1000 + Math.random() * 9000);
// const otp = Math.floor(1000 + Math.random() * 9000);
const otp = Math.floor(100000 + Math.random() * 900000);
console.log(otp);

// sendOtp.retry("917903980985", false, function (error, response) {
// if(error) {
//     console.log('Error:::',error);
// }
// else{
//     console.log(response);
// }
// });

// sendOtp.verify("917903980985", "4240", function (error, response) {
//     console.log(response); // data object with keys 'message' and 'type'
//     if(response.type == 'success') console.log('OTP verified successfully')
//     if(response.type == 'error') console.log('OTP verification failed')
//   });

//   const SendOtp = require('sendotp');
//   const sendOtp = new SendOtp('AuthKey', 'Otp for your order is {{otp}}, please do not share it with anybody');







// const request = require('request')

// const url = 'https://api.msg91.com/api/v5/otp?authkey=331244AX9lq8GR5ed89db4P1&template_id=5ed8a156d6fc0528af2e44f2&extra_param={"Param1":"Value1", "Param2":"Value2", "Param3": "Value3"}&mobile=+917903980985&invisible=1&otp=12345&userip=137.97.241.207&email=harshit.suman@sysarks.com'
 
//  request.get(url,{json:true},(err,res) => {
//      if(err)
//      console.log(err);
//      else
//      console.log(JSON.stringify(res,undefined,2));
//  }).setHeader({
//  'authkey' : '331244AX9lq8GR5ed89db4P1',
//  'template_id' : '5ed8a156d6fc0528af2e44f2',
//  'sender_id':'SMSIND'
//  });




// const SendOtp = require('sendotp');
// var connection = require('../db/pgconnection');

// const sendOtp = new SendOtp('331244AX9lq8GR5ed89db4P1');
// //917903980985

// var registerParentModel = {

//     checkMobileNumber : async (mobileNumber) => {
//         try{
//             const pgsql = `select primary_number, registered, status from parent_master where primary_number = '${mobileNumber.mobile_number}'`;
//             const response = await connection.query(pgsql);    
//             if(response.rows.length){
//                 if(response.rows[0].registered === false && response.rows[0].status == 'inactive'){
//                     //===========Generated otp==================
//                     const otpvalue =  Math.floor(1000 + Math.random() * 9000);
//                     const setOtpQuery = `update  parent_master set varified_otp = '${otpvalue}' where primary_number = '${response.rows[0].primary_number}'`;
//                     await connection.query(setOtpQuery);
//                     // =============Send otp===============
//                     sendOtp.send(response.rows[0].primary_number, "SMSIND", otpvalue, function (error,response) {
//                         if(error) {
//                             console.log('Error:::',error);
//                         }
//                         else{
//                             //=======Expiry time of OTP=================
//                             sendOtp.setOtpExpiry('5'); //in minutes
//                             console.log(response);
//                             console.log('Otp sent');
//                             return 'Otp sent';
//                         }
//                     });
//                     // return response.rows[0].primary_number;
//                 }else if(response.rows[0].registered === true){
//                     return 'Mobile number is already registered';
//                 }
//             }
//             else
//                 return "Mobile number is not valid or not available in db.";
//         }
//         catch(e){
//             console.error('Error in model',e);
//             throw new Error(e);
//         }
//     }
// }

// module.exports = registerParentModel;