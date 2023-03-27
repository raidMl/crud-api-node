const express = require("express");
const bodyParser = require("body-parser");
const postroute =require('./Routes/posts')
const app = express();

app.use(bodyParser.json())


app.get('/', (req, res) => {
    res.send('hellow word');
})


app.use('/',postroute)



app.listen(5000, () => {
    console.log("server runing!");
})
