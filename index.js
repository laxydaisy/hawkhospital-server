const express = require("express");
const app = express();

app.get("/",function (req, res){
    //logic
    res.send("message", "Hello World!");
});

app.listen(8081,function(){
    console.log("App listening on port 8081");
});
