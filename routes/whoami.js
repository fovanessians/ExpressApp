// routes/whoami.js
const express = require('express');
const router = express.Router();

router.get('/api/whoami', function (req, res) {
  const ipAddress = IP.address();
  let localLanguage = req.headers["accept-language"]
  let newUserAgent = new UserAgent(); 
  res.json({ ipaddress: ipAddress, language: localLanguage,  software: newUserAgent.toString()});
});


/*
//get route show ip address
router.get('/api/ipaddress', (req, res) => {
    const ipAddress = IP.address();
    res.send(ipAddress)
})
*/

router.get('/api/os', (req, res) => {
  console.log(os.type());
  res.send(os.type());
});


module.exports = router;
