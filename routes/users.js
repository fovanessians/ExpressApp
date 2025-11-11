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

router.post('/name', (req, res, next) => {
  let firstName = req.body.first;
  let lastName = req.body.last;
  res.json({name: `${firstName} ${lastName}`})  
});

router.get('/nameGet', (req, res, next) => {
  let firstName = req.query.first;
  let lastName = req.query.last;
  res.json({
    name: `${firstName} ${lastName}`
  });
});


//The first and last name parameters should be encoded in a 
//query string e.g. ?first=firstname&last=lastname.



module.exports = router;

/*
For the POST route, data is sent in the request body, which is typically used 
for creating or updating resources. The req.body object contains data submitted 
in the body of the request, such as form data or JSON. To access this data, the 
Express application must use the express.json() middleware to parse the incoming 
request body; otherwise, req.body will be undefined.
 In the provided code, req.body.first and req.body.last retrieve the values of the 
 first and last fields from the request body, which are then used to construct a 
 JSON response with the name.

For the GET route, data is sent via the query string in the URL. The req.query object 
contains key-value pairs from the query string. In the example, req.query.first 
and req.query.last extract the values of the first and last parameters from the query string
(e.g., ?first=John&last=Doe). This method is commonly used for filtering, searching, or pagination,
where the data is not sensitive and is meant to be part of the URL.
 The route responds with a JSON object containing the name constructed from the query parameters.

In summary, req.body is used for sending data in the body of a POST or PUT request, typically
for sensitive or large data, while req.query is used for sending data in the URL query string, 
usually for non-sensitive, filter-like parameters.
*/
