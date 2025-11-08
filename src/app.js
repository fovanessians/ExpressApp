let express = require('express');
let app = express();
let bodyParser = require('body-parser');
console.log('Express Dependencies')



app.get('/test', function routeHandler(req, res) {
  res.send('ok');
});



/*app.use('/json', (req, res, next) => {
  console.log(req.method + " " + req.path + " " + 
 " - " + " " + req.ip);
  next();
}); 
*/

app.get('/now', function(req, res, next) {
  req.time = new Date().toString();  // get date
  next();
}, function(req, res) {
  res.json({time: req.time});
});

app.get('/:word/echo', function(req, res) {
  let {word} = req.params;
  res.json({echo: word});
});


/*n the first two lines of the file myApp.js, you can see how easy it is to create an Express app object. This object has several methods, and you will learn many of them in these challenges. One fundamental method is app.listen(port). It tells your server to listen on a given port, putting it in running state. For testing reasons, we need the app to be running in the background so we added this method in the server.js file for you.

Let’s serve our first string! In Express, routes takes the following structure: app.METHOD(PATH, HANDLER). METHOD is an http method in lowercase. PATH is a relative path on the server (it can be a string, or even a regular expression). HANDLER is a function that Express calls when the route is matched. Handlers take the form function(req, res) {...}, where req is the request object, and res is the response object. For example, the handler

Use the app.get() method to serve the string "Hello Express" to GET requests matching the / (root) path. Be sure that your code works by looking at the logs, then see the results in the preview if you are using Replit.

Note: All the code for these lessons should be added in between the few lines of code we have started you off with.*/

/*app.get('/', (req, res, next) => {
  res.send('Hello Express');
}) 
*/

/*If you have a website and want to serve an index.html file you probably want to put this in a public folder. This is to ensure the public doesn’t see something you dont want them to, and it sometimes is called “public” or “views,” but you can technically call it whatever you want.

To serve an index.html in a folder called “public” at the root domain you would do so like this:*/


app.use("/public", express.static(__dirname + "/public"));


app.get("/json", (req, res) => {
  res.json({message: "Hello json"});
});


/*

app.get("/json", (req, res) => {
  if (process.env.MESSAGE_STYLE==="uppercase") {
    res.json({message: "HELLO JSON"});
  }
  else {res.json({message: "Hello json"})}
  
});
console.log(process.env.MESSAGE_STYLE.toUpperCase());*/


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/nameGet', (req, res, next) => {
  let firstName = req.query.first;
  let lastName = req.query.last;
  res.json({
    name: `${firstName} ${lastName}`
  });
});

//The first and last name parameters should be encoded in a //query string e.g. ?first=firstname&last=lastname.

//logger middleware
const myLogger = function (req, res, next) {
  console.log('LOGGED')
  next()
}

app.use('/random', myLogger);

app.get('/random', (req, res) => {
  res.send('Hello World!')
})
//logger middleware

//request time
const requestTime = function (req, res, next) {
  req.requestTime = Date()
  next()
}

app.use(requestTime)

app.get('/time', (req, res, next) => {
  let responseText = 'Date() response!<br>'
  responseText += `<small>Requested at: ${req.requestTime}</small>`
  res.send(responseText + '<br> <br> <h1> next <br> <br>');
 
})
//request time

//main html page
let relativePath = "/views/index.html";


app.get('/', (req, res) => {
  res.sendFile(__dirname + relativePath);
});
//main html page


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.post('/name', (req, res, next) => {
  let firstName = req.body.first;
  let lastName = req.body.last;
  res.json({name: `${firstName} ${lastName}`})  
});


 module.exports = app;
