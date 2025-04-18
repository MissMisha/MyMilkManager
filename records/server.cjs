let express= require("express");
let app=express();

app.listen(2001,function(req,resp){
    console.log("server started");
})
