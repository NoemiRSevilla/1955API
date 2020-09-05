const express = require('express'),
    app = express(),
    port = 8000,
    server = app.listen(port, console.log(`Listening on port ${port}`))
    

    app.use(express.urlencoded({extended: true}));
    app.use(express.json());



app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

//mongoose stuff
require('./server/config/database.js');

//ROUTES
require('./server/config/routes.js')(app);