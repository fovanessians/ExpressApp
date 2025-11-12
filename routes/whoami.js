// routes/whoami.js
const express = require('express');
const router = express.Router();
const os = require('os');
let ip = require('ip');
let http = require('http');

router.get('/api/os', (req, res) => {
  const osType = os.type();
  console.log(osType);
  res.send(osType);
});

router.get('/api/whoami', function (req, res) {
  req.headers
  res.json({ ipaddress: ip.address(), headers: req.headers });
});



module.exports = router;
