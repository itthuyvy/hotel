var express = require('express');
var app = express();
var path = require('path');
var port = 2000;
var serve = require("http").createServer(app).listen(port, ()=>{
	console.log('Server is running');
});
app.use(express.static(path.join(__dirname, "client/user")));

app.get("/", function(request, response){
console.log('people connect');	
    response.sendFile(path.join(__dirname, "client/user", "index.html"));
});

app.get("/blog", function(request, response){
    response.sendFile(path.join(__dirname, "client/user", "blog.html"));
});

app.get("/tintuc", function(request, response){
    response.sendFile(path.join(__dirname, "client/user", "tintuc.html"));
});
