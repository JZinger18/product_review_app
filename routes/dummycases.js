     var db = require("../models");


     module.exports = function(app)
     {

      app.get("/adduserValues",function(req,res){

     db.User.create({
      username:"andrewwilliams",
      password:"abc11abc22",
      email:"andrewjameswilliams.aw@gmail.com"
    })
     db.User.create({
      username:"testUser1",
      password:"abc11abc22",
      email:"testuser1@gmail.com"
    });
     db.User.create({
      username:"testUser2",
      password:"abc11abc22",
      email:"testuser2@gmail.com"
    });
     db.User.create({
      username:"testUser3",
      password:"abc11abc22",
      email:"testuser3@gmail.com"
    });
     db.User.create({
      username:"testUser4",
      password:"abc11abc22",
      email:"testuser4@gmail.com"
    });
      res.redirect("/testing");
        });
    app.get("/addchannelValues",function(req,res){
     db.Channel.create({
      channelDescription:"We make comedy videos",
      name:"h3h3Productions",
      UserId:1,
      category:"comedy",
      thumbnail:"https://yt3.ggpht.com/-QWMKBXNBE2E/AAAAAAAAAAI/AAAAAAAAAAA/rEARmBXfgHw/s88-c-k-no-mo-rj-c0xffffff/photo.jpg"
    });
     db.Channel.create({
      channelDescription:'I make videos',
      name:"PewDiePie",
      UserId:2,
      category:"gaming",
      thumbnail:"https://yt3.ggpht.com/-rJq9gk1QIis/AAAAAAAAAAI/AAAAAAAAAAA/Kx4wkvKOfxY/s88-c-k-no-mo-rj-c0xffffff/photo.jpg"
    });
     db.Channel.create({
      channelDescription:"Liberal Radio Host. Social Democrat. Agnostic-Atheist. Secular Humanist. Loyal to the Facts. Principles over Politicians.",
      name:"Secular Talk",
      UserId:4,
      category:"news",
      thumbnail:"https://yt3.ggpht.com/-sN5TPGyausY/AAAAAAAAAAI/AAAAAAAAAAA/ScJMYdaIA3A/s88-c-k-no-mo-rj-c0xffffff/photo.jpg"
    });
     db.Channel.create({
      channelDescription:"The Largest Online News Show in the World. Hosted by Cenk Uygur & Ana Kasparian. LIVE weekdays 6-8pm ET. Young Turk (n), 1. Young progressive or ...",
      name:"The Young Turks",
      UserId:3,
      category:"News",
      thumbnail:"https://yt3.ggpht.com/-8EmOV6Uyan8/AAAAAAAAAAI/AAAAAAAAAAA/lsr2usyFUO0/s88-c-k-no-mo-rj-c0xffffff/photo.jpg"
    });
    res.redirect("/testing");
});
        app.get("/addreviewValues",function(req,res){
     db.Review.create(
     	{
     	messageBody:"PewDiePie is certainly not the greatest creator on the youtube platform, however, his fame and notoriety are certainly not unwarranted",
     	UserId:2,
     	ChannelId:2,
     	rating:4
     	}
     );
     db.Review.create(
     	{
     	messageBody:"The young turks are famous for speaking truth to power and having the most amount of trolls anyone has ever seen",
     	UserId:1,
     	ChannelId:4,
     	rating:3
     	}
     );
     db.Review.create(
     	{
     	messageBody:"Secular Talk, AKA Kyle Kulinski, AKA the progressinator, a truly principled man with a wonderful comedic capacity",
     	UserId:3,
     	ChannelId:3,
     	rating:5
     	}
     );
     db.Review.create(
     	{
     	messageBody:"Ya boy Ethan the thicc boi, greatest man of all time without a doubt. all Praise lord Ethan.",
     	UserId:4,
     	ChannelId:1,
     	rating:5
     	}
     );
     db.Review.create(
     	{
     	messageBody:"Ethan Klein is certaily not underrated and I believe deserves alot more attention than he currently receives. However I really hope he goes back to regularly uploading so we can get some fresh hot memes",
     	UserId:1,
     	ChannelId:1,
     	rating:4
     	}
     );
     db.Review.create(
     	{
     	messageBody:"Pewds, the original nazi fan boy turned social justice target turned shamed swede turned literal ghost. This man changed what it meant to be a human target and contains to be my source of laughter on many occasions.",
     	UserId:1,
     	ChannelId:2,
     	rating:4
     	}
     );
     db.Review.create(
     	{
     	messageBody:"Kyle Kuliski is a liberal cuck who doesn't know anything about the world around him. Everyone would be better off just erasing the knowledge of this mans existence from their head",
     	UserId:1,
     	ChannelId:3,
     	rating:1
     	}
     );
    res.redirect("/testing");
  });

   }
