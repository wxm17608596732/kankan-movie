module.exports = {
    local: function(req, res){


        var request  = require("request")
        var url1="https://api.douban.com/v2/movie/top250?start=0&count=100"
        request.get(url1, function(_err, resp2, data){
            var dou_data = (JSON.parse(data)).subjects
            res.render('local',{dou_data})
            
        })
        
    }
}