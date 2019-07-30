const express = require('express');
const port = process.env.PORT || 3030;
const {static} = require('express');


const app = express();

if(process.env.NODE_ENV == "production"){
    app.use(express.static("./dist"))
}

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.listen(port, ()=>{console.log(`Application listening on port ${port}`)});