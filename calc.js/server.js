//jshint esversion
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(2000, function() {
    console.log("this port is running on 2000");
});
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});
// app.post("/", function(req, res) {
//     var num1 = Number(req.body.n1);
//     // res.send(n2);
//     var num2 = Number(req.body.n2);
//     var final = num1 + num2;
//     res.send(final + "");
// });
app.post("/", function(req, res) {
    var height = Number(req.body.num1);
    var weight = Number(req.body.num2);
    var bmi = weight / (height * height);
    res.send("the calculate bmi " + bmi);
})