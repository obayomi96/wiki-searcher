const express = require("express"),
    bodyParser = require("body-parser"),
    path = require("path"),
    PORT = process.env.PORT || 3000;
    
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT);
console.log('Server Started...');

module.exports = app;
