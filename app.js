var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    db = require('./api/models/connection'),
    Task = require('./api/models/model'),
    bodyParser = require('body-parser'),
    routes = require('./api/routes/route');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// front end
app.use(express.static(__dirname))

db(mongoose)

routes(app)

app.listen(port)

console.log('Server is running on port ',port);
