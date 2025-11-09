// routes/users.js
const express = require('express');
const router = express.Router();

router.get('/register', (req, res) => {
    res.render('register');
});

router.get('/login', (req, res) => {
    res.render('login');
});

//The first and last name parameters should be encoded in a 
//query string e.g. ?first=firstname&last=lastname.

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.post('/name', (req, res, next) => {
  let firstName = req.body.first;
  let lastName = req.body.last;
  res.json({name: `${firstName} ${lastName}`})  
});

app.get('/nameGet', (req, res, next) => {
  let firstName = req.query.first;
  let lastName = req.query.last;
  res.json({
    name: `${firstName} ${lastName}`
  });
});


//The first and last name parameters should be encoded in a 
//query string e.g. ?first=firstname&last=lastname.



module.exports = router;
