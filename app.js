var  express = require("express");
var  app = express();
var sqlite3 = require("sqlite3");
var db =new sqlite3.Database("./comm.db");


app.get("/",function(req,res){
    res.sendFile(__dirname+"/"+"index.html");

});

app.get("/po",function(req,res){
    response:{
        fname = req.query.fname;
    }
    db.all("select * from users;",(ERR,DA)=>{
        if (ERR)
        {
                console.log("Problem");
        }else{
            console.log("Nice");
        }
    });

});


var s = app.listen(8081);