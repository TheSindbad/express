let express = require('express');
let bodyParser = require('body-parser')
let app = express();


require('dotenv').config()

// app.use(bodyParser.urlencoded({ extended: false }));

// app.use(function middleware(req, res, next) {
//   console.log( string = req.method + " " + req.path + " - " + req.ip);
//   next();
// });


// app.get('/now', function(req, res, next) {
//   req.time = new Date().toString();  
//   next();
// }, function(req, res) {
//   res.send({time: req.time});
// });

app.get("/json",(req,res)=>{
  // console.log(process.env.MESSAGE_STYLE);
    // a = process.env.MESSAGE_STYLE;
    if (process.env.MESSAGE_STYLE == "uppercase") {
        res.json({message: "HELLO JSON"});
      } else {
        res.json({message: "Hello json"});
      }
});


// app.get("/:word/echo", (req, res) => {
//   const { word } = req.params;
//   res.json({
//     echo: word
//   });
// });

app.get("/name", function(req, res) {
  
  firstName = req.query.first;
  lastName = req.query.last;
  res.json({
    name: `${firstName} ${lastName}`
  });
});


app.post("/name", function(req, res) {
  
  var string = req.body.first + " " + req.body.last;
  res.json({ name: string });
});

































 module.exports = app;
