// routes/whoami.js
const express = require('express');
const router = express.Router();
const os = require('os');



router.get('/api/os', (req, res) => {
  const osType = os.type();
  console.log(osType);
  res.send(osType);
});


module.exports = router;
