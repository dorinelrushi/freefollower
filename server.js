const express = require("express");
const path = require("path");
const ejs = require("ejs");
const router = require("./routes/")
const app = express();
require("./database")




app.set('views',path.join(__dirname , 'views'));
app.set('view engine','ejs');


app.use('/public',express.static('public'))
app.use(express.urlencoded({extended : false}))
app.use(express.json());

app.use('/',router);

app.listen(3000,()=>{
    console.log('server is running on port 3000')
})