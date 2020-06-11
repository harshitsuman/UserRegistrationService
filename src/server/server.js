var express = require('express');
var app = express();

const cors = require('cors');
app.use(cors());
app.options('*', cors());

app.use(express.json());

const registerParentApi = require('../api/registerParentApi');
const verifyOtpApi = require('../api/verifyOtpApi');
const retryOtpApi = require('../api/retryOtpApi')
const setmPinApi = require('../api/setMpinApi');

app.use(registerParentApi);
app.use(verifyOtpApi);
app.use(setmPinApi);
app.use(retryOtpApi);


module.exports = app;