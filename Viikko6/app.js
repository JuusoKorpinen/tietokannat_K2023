var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/example',
    function(request,response){
        response.send('Mina olen esimerkki');
        console.log('Mina olen esimerkki');
    }
);
app.use('/example', //Kutsuu etunimi middlewaren
    function(req,res,next){
        console.log('Etunimi middleware kutsuttiin');
        next();
    }
); 
app.use('/example2', //Kutsuu etunimi sukunimi middlewaren
    function(req,res,next){
        console.log('Etunimi ja Sukunimi middleware kutsuttiin');
        next();
    }
); 

app.get('/example/:name', //Tulostaa "Terve" ja annetun nimen
    function(request,response){
        response.send('Terve '+request.params.name);
    }
);

app.get('/example2/:firstName/:lastName', //Tulostaa "Terve" ja annetun etu- ja sukunimen
    function(request, response){
        response.send('Terve '+request.params.firstName+" "+request.params.lastName);
    }
);

app.post('/', //Tulostaa takaisin antaman datan
    function(request,response){
        response.send(request.body);
        console.log(request.body);
    }
);

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
