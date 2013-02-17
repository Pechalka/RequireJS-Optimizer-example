var express = require('express');
var app = express();
var path = require('path');

app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser()); 
app.use(express.static(__dirname + "/../site/"));

app.use(express.session({ secret: 'abc'} ));

app.listen(8080, function(){
  console.log("Express server listening on port %d", '8080');
});

