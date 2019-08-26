var express = require('express');
var app = express();
var path = require('path');
//3,设置视图地址
app.set('views', path.join(__dirname, '/views'));
//4,设置ejs引擎
app.set('view engine', 'html');
app.engine('html', require('ejs').__express);
//5,设置静态文件
app.use(express.static('public'));
var bodyParser = require('body-parser');
//7，创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false });

//引用控制器
var controller = require('./Conrtrollers/Controllers')
// app.get('/index' , controller.index)
app.get('/local' , controller.local)

// var request  = require("request")
// var url1="https://api.douban.com/v2/movie/top250?start=0&count=100"
// request.post(url1, function(err, resp2, data){
//     // console.log(data)
//     res.send(data)
// })

app.listen(8888, function(){
    console.log("sever runuing at http://localhost:8888")
})