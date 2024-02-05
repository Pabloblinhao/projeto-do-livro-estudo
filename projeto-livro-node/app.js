var express = require('express');
var load = require('express-load');
var app = express(); 
var cookieParser = require('cookie-parser');
var session = require('express-session');

app.set('views', __dirname + '/views');  
app.set('view engine', 'ejs');
app.use(cookieParser('projeto-livro-node'));
app.use(session({
  secret: 'projeto-livro-node',
  resave: false,
  saveUninitialized: false
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));



load('models') 
.then('controllers') 
.then('routes')
.into(app);


app.listen(3000, function(){ 
  console.log("Ntalk no ar");
});

