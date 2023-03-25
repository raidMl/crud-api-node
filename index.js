const express = require("express");
const bodyParser = require("body-parser");
const postroute = require('./routes/posts')
const app = express();

app.use(bodyParser.json())
// app.use(express.json())

app.get('/', (req, res) => {
    res.send('hellow word');
})


app.use('/', postroute)



app.listen(5000, () => {
    console.log("server runing!");
})
