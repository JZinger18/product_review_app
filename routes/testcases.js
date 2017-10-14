     var db = require("../models");
module.exports = function(app){

app.get("/addtestValues",function(req,res){
		for (var i = 0; i < 501; i++){

			db.TestModel.create({
		      ChannelDescription:"We make comedy videos"+i,
		      name:"h3h3Productions"+i,
		      UserFbId:'abc11abc23'+i,
		      category:"comedy"+i,
		      thumbnail:"https://yt3.ggpht.com/-QWMKBXNBE2E/AAAAAAAAAAI/AAAAAAAAAAA/rEARmBXfgHw/s88-c-k-no-mo-rj-c0xffffff/photo.jpg",
		      userFbId: "test"+i,
		      amountOfStars:`<i class="fa fa-star"></i>`.repeat(1+Math.floor(Math.random()*5))
		    }).then(function(hello){console.log(hello)})
		}
		res.json({done:"done"})
	});
}