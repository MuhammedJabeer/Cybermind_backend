var express = require('express');
var router = express.Router();

const jobcontroller=require('../Controller/jobcontroller')





router.post('/create',jobcontroller.createjob)



router.get('/getjob',jobcontroller.getalljob)

module.exports = router;
