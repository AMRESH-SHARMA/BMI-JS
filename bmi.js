const express = require("express");
const bodyParser = require('body-parser')                   //body-parser Middleware to capture FORM DATA

const app = express();
app.use(bodyParser.urlencoded({extended: true}));           //body-parser, APP use urlencoded.
//______________________________________________________________________________________________________________

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/index.html");
});


app.post('/', function(req, res) {
    console.log(req.body)                                   //req.body Returns an ARRAY of input values.
    var num1 = Number(req.body.weight);                     //Number() Set type from STRING to INTEGER.
    var num2 = Number(req.body.height);
    var num3 = num1 / (num2 * num2)

    res.send("<h1>Your current BMI is: </h1>"+num3);         //Post request, Returns value
});

//______________________________________________________________________________________________________________

app.listen(3000, function() {
    console.log("server running");
});
