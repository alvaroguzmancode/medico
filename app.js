var app=require("express")();
var server=require('http').Server(app);

server.listen(3000);
app.get('/',function(req,res){
	
	res.send("hola mundo");

});
