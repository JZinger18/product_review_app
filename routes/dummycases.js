     var db = require("../models");


     module.exports = function(app)
     {

      app.get("/adduserValues",function(req,res){

     db.User.create({
      username:"andrewwilliams",
      fbId:"abc11abc23",
      email:"andrewjameswilliams.aw@gmail.com"
    })
     db.User.create({
      username:"testUser1",
      fbId:"abc11abc24",
      email:"testuser1@gmail.com"
    });
     db.User.create({
      username:"testUser2",
      fbId:"abc11abc25",
      email:"testuser2@gmail.com"
    });
     db.User.create({
      username:"testUser3",
      fbId:"abc11abc26",
      email:"testuser3@gmail.com"
    });
     db.User.create({
      username:"testUser4",
      fbId:"abc11abc27",
      email:"testuser4@gmail.com"
    });
     db.User.create({
      username:"testUser5",
      fbId:"abc11abc28",
      email:"testuser5@gmail.com"
    });
     db.User.create({
      username:"testUser6",
      fbId:"abc11abc29",
      email:"testuser6@gmail.com"
    });
     db.User.create({
      username:"testUser7",
      fbId:"abc11abc30",
      email:"testuser7@gmail.com"
    });
    res.redirect("/stephanfile.html");
        });
    app.get("/addchannelValues",function(req,res){
     db.Channel.create({
      channelDescription:"We make comedy videos",
      name:"h3h3Productions",
      UserFbId:'abc11abc23',
      category:"comedy",
      thumbnail:"https://yt3.ggpht.com/-QWMKBXNBE2E/AAAAAAAAAAI/AAAAAAAAAAA/rEARmBXfgHw/s88-c-k-no-mo-rj-c0xffffff/photo.jpg"
    });
     db.Channel.create({
      channelDescription:'I make videos',
      name:"PewDiePie",
      UserFbId:'abc11abc23',
      category:"gaming",
      thumbnail:"https://yt3.ggpht.com/-rJq9gk1QIis/AAAAAAAAAAI/AAAAAAAAAAA/Kx4wkvKOfxY/s88-c-k-no-mo-rj-c0xffffff/photo.jpg"
    });
     db.Channel.create({
      channelDescription:"Liberal Radio Host. Social Democrat. Agnostic-Atheist. Secular Humanist. Loyal to the Facts. Principles over Politicians.",
      name:"Secular Talk",
      UserFbId:"abc11abc24",
      category:"news",
      thumbnail:"https://yt3.ggpht.com/-sN5TPGyausY/AAAAAAAAAAI/AAAAAAAAAAA/ScJMYdaIA3A/s88-c-k-no-mo-rj-c0xffffff/photo.jpg"
    });
     db.Channel.create({
      channelDescription:"The Largest Online News Show in the World. Hosted by Cenk Uygur & Ana Kasparian. LIVE weekdays 6-8pm ET. Young Turk (n), 1. Young progressive or ...",
      name:"The Young Turks",
      UserFbId:'abc11abc23',
      category:"News",
      thumbnail:"https://yt3.ggpht.com/-8EmOV6Uyan8/AAAAAAAAAAI/AAAAAAAAAAA/lsr2usyFUO0/s88-c-k-no-mo-rj-c0xffffff/photo.jpg"
    });
     db.Channel.create({
      channelDescription:"For Business Inquiries: http://jennamarblesblog.com/contact-me/ http://www.facebook.com/pages/Jenna-Mourey/311917224927 ...",
      name:"JennaMarbles",
      UserFbId:"abc11abc24",
      category:"lifestyle",
      thumbnail:"https://yt3.ggpht.com/-34FbM3JM5Ck/AAAAAAAAAAI/AAAAAAAAAAA/qVlymUN44C8/s88-c-k-no-mo-rj-c0xffffff/photo.jpg"
    });
     db.Channel.create({
      channelDescription:"Top of the mornin' to ya, laddies! Welcome to my channel, my name is jacksepticeye. I am the most consistently energetic videogame commentator on youtube.",
      name:"jacksepticeye",
      UserFbId:"abc11abc28",
      category:"gaming",
      thumbnail:"https://yt3.ggpht.com/-6KbRToTL_9o/AAAAAAAAAAI/AAAAAAAAAAA/byNnz42pdGk/s88-c-k-no-mo-rj-c0xffffff/photo.jpg"
    });
     db.Channel.create({
      channelDescription:"Parodies! Music videos! Sketches! JackAsk! Your Grammar Sucks! News in Haikus! YIAY! Hi, my name is Jack Douglass. You found my YouTube channel where ...",
      name:"jacksfilms",
      UserFbId:"abc11abc24",
      category:"comedy",
      thumbnail : "https://yt3.ggpht.com/-6Sj6Quz5Njs/AAAAAAAAAAI/AAAAAAAAAAA/cRlUOiAQDnA/s88-c-k-no-mo-rj-c0xffffff/photo.jpg"
    });
     db.Channel.create({
      channelDescription:"We make funny videos to avoid getting a proper job. Business enquiries: matthew@mhatalent.com.",
      name:"Jack and Dean",
      UserFbId:"abc11abc29",
      category:"comedy",
      thumbnail:"https://yt3.ggpht.com/-8DhrYWHhY_c/AAAAAAAAAAI/AAAAAAAAAAA/6Gi4OGQsj04/s88-c-k-no-mo-rj-c0xffffff/photo.jpg"
    });
     db.Channel.create({
      channelDescription:"One of the leading Dragon Ball YouTube Channels in the world Creator of Anime War and top reviewer of Dragon Ball Super Additionally, I am creating a brand ...",
      name:"MaSTAR Media",
      UserFbId:"abc11abc24",
      category:"anime",
      thumbnail:"https://yt3.ggpht.com/-wgYY3K45gSM/AAAAAAAAAAI/AAAAAAAAAAA/YN_IcUC6cCo/s88-c-k-no-mo-rj-c0xffffff/photo.jpg"
    });
     db.Channel.create({
      channelDescription:"Welcome to DramaAlert! Your #1 source for news on the social interations in online entertainment! Thank you for visiting and don't forget to report all drama to ...",
      name:"DramaAlert",
      UserFbId:"abc11abc27",
      category:"drama",
      thumbnail:"https://yt3.ggpht.com/-0O2IeWJBqR4/AAAAAAAAAAI/AAAAAAAAAAA/NK2C1XRGIKI/s88-c-k-no-mo-rj-c0xffffff/photo.jpg"
    });
     db.Channel.create({
      channelDescription:"Hey guys, ComedyShortsGamer here! My Name is Deji MY SHOP: http://shop.comedyshortsgamer.com PO BOX: Tank Global PO Box 1370, Peterborough.",
      name:"ComedyShortsGamer",
      UserFbId:"abc11abc30",
      category:"comedy",
      thumbnail:"https://yt3.ggpht.com/-_HXUz8PI_8k/AAAAAAAAAAI/AAAAAAAAAAA/UzM_0cKevAA/s88-c-k-no-mo-rj-c0xffffff/photo.jpg"
    });
     db.Channel.create({
      channelDescription:"Comedy Central brings you the funniest stuff on the planet. Watch hit shows like Workaholics, Tosh.0, The Daily Show with Trevor Noah, Inside Amy Schumer, ...",
      name:"Comedy Central",
      UserFbId:"abc11abc24",
      category:"Comedy",
      thumbnail:"https://yt3.ggpht.com/-ios1OK1LQyc/AAAAAAAAAAI/AAAAAAAAAAA/1lJALaYer2c/s88-c-k-no-mo-rj-c0xffffff/photo.jpg"
    });
     db.Channel.create({
      channelDescription:"The View is ABC's morning chatfest, featuring Whoopi Goldberg, Joy Behar, Paula Faris, Sara Haines, Sunny Hostin, and Meghan McCain discussing the most ...",
      name:"The View",
      UserFbId:"abc11abc23",
      category:"Pop culture/Politics",
      thumbnail:"https://yt3.ggpht.com/-jn7rThGotIc/AAAAAAAAAAI/AAAAAAAAAAA/LnxMsxRV3Aw/s88-c-k-no-mo-rj-c0xffffff/photo.jpg"
    });
     db.Channel.create({
      channelDescription:"This is the official YouTube channel of author Sam Harris. Subscribe for full episodes of 'The Waking Up' podcast. Join neuroscientist, philosopher, and ...",
      name:"Sam Harris",
      UserFbId:"abc11abc25",
      category:"philosophy",
      thumbnail:"https://yt3.ggpht.com/-Yh0XpkOF4Ig/AAAAAAAAAAI/AAAAAAAAAAA/ELPAPV7gg90/s88-c-k-no-mo-rj-c0xffffff/photo.jpg"
    });
     db.Channel.create({
      channelDescription:"Fitness Gym Bodybuilding Exercising And Gains !",
      name:"luimarco",
      UserFbId:"abc11abc28",
      category:"fitness",
      thumbnail:"https://yt3.ggpht.com/-FgJ-HUFt4ig/AAAAAAAAAAI/AAAAAAAAAAA/IPKixMfRn-0/s88-c-k-no-mo-rj-c0xffffff/photo.jpg"
    });
     db.Channel.create({
      channelDescription:"NEW VIDEOS EVERY WEEK! Make sure you SUBSCRIBE! Part of the Shots Studios family.",
      name:"Rudy Mancuso",
      UserFbId:"abc11abc30",
      category:"comedy/skits",
      thumbnail:"https://yt3.ggpht.com/-iVp0euI7qZ8/AAAAAAAAAAI/AAAAAAAAAAA/E5lGqqCuwO8/s88-c-k-no-mo-rj-c0xffffff/photo.jpg"
    });
     db.Channel.create({
      channelDescription:"The Joe Rogan Experience podcast.",
      name:"PowerfulJRE",
      UserFbId:"abc11abc24",
      category:"talkshow",
      thumbnail:"https://yt3.ggpht.com/-Y4tjkwsR774/AAAAAAAAAAI/AAAAAAAAAAA/1kTUglFGXoU/s88-c-k-no-mo-rj-c0xffffff/photo.jpg"
    });
     db.Channel.create({
      channelDescription:"Learn more about who I am and what I do by going to foundmyfitness.com. While you're there, sign-up for my newsletter and I will send you announcements on ...",
      name:"FoundMyFitness",
      UserFbId:"abc11abc27",
      category:"fitness",
      thumbnail:"https://yt3.ggpht.com/-ovghvMJFXHY/AAAAAAAAAAI/AAAAAAAAAAA/r28U2R0MY8U/s88-c-k-no-mo-rj-c0xffffff/photo.jpg"
    });
     db.Channel.create({
      channelDescription:"He's irrepressible, opinionated, and of course, politically incorrect. Watch new episodes of Real Time with Bill Maher, Fridays at 10PM Subscribe to the Real ...",
      name:"Real Time with Bill Maher",
      UserFbId:"abc11abc29",
      category:"politics/comedy",
      thumbnail:"https://yt3.ggpht.com/-tbRHRuxcqwE/AAAAAAAAAAI/AAAAAAAAAAA/vrXiH3dsY1E/s88-c-k-no-mo-rj-c0xffffff/photo.jpg"
    });
     db.Channel.create({
      channelDescription:"Hi. We're an unfiltered talk show. Pop culture, social issues, interviews, real life. Oh, also murder and serial killer things. Keeping it real with the information and ...",
      name:"Pop Trigger",
      UserFbId:"abc11abc28",
      category:"pop culture/politics",
      thumbnail:"https://yt3.ggpht.com/-xM-Xf7XSB84/AAAAAAAAAAI/AAAAAAAAAAA/ibdSZ_6PS8Q/s88-c-k-no-mo-rj-c0xffffff/photo.jpg"
    });
     db.Channel.create({
      channelDescription:"Russian Dude With A Camera and Some Wonderful Ideas Shirts Available Now :) http://vitalyzdtvstore.com Business Inquiries Only: ...",
      name:"VitalyzdTv",
      UserFbId:"abc11abc27",
      category:"Pranks/comedy",
      thumbnail:"https://yt3.ggpht.com/-4SPvVLuTgMU/AAAAAAAAAAI/AAAAAAAAAAA/yu-kq_tr3Ro/s88-c-k-no-mo-rj-c0xffffff/photo.jpg"
    });
     db.Channel.create({
      channelDescription:"WHATS UP?! Im Jake Paul. Im 20, live in Los Angeles, & have a crazy life! Keep up :) The squad 'Team 10' & I are always making comedy vids, acting, doing ...",
      name:"Jake Paul",
      UserFbId:"abc11abc25",
      category:"vlogging/comedy",
      thumbnail:"https://yt3.ggpht.com/-7i6_ndQToGY/AAAAAAAAAAI/AAAAAAAAAAA/qpimh9SkcWo/s88-c-k-no-mo-rj-c0xffffff/photo.jpg"
    });
     db.Channel.create({
      channelDescription:"Videos about numbers - it's that simple. Videos by Brady Haran.",
      name:"Numberphile",
      UserFbId:"abc11abc24",
      category:"math/education",
      thumbnail: "https://yt3.ggpht.com/-ObcwfadZ5MI/AAAAAAAAAAI/AAAAAAAAAAA/qxNULGXLkd4/s88-c-k-no-mo-rj-c0xffffff/photo.jpg"
    });
     db.Channel.create({
      channelDescription:"I do mathematics and stand-up. Sometimes simultaneously. Occasionally while being filmed. (It's quite the Venn diagram.) http://standupmaths.com ...",
      name:"standupmaths",
      UserFbId:"abc11abc30",
      category:"math/comedy",
      thumbnail:"https://yt3.ggpht.com/-iWNFz-HNsOc/AAAAAAAAAAI/AAAAAAAAAAA/5LI38HDzD34/s88-c-k-no-mo-rj-c0xffffff/photo.jpg"
    });
    res.redirect("/stephanfile.html");
});
        app.get("/addreviewvalues",function(req,res){
     db.Review.create(
     	{
     	messageBody:"PewDiePie is certainly not the greatest creator on the youtube platform, however, his fame and notoriety are certainly not unwarranted",
     	UserFbId:"abc11abc30",
     	ChannelId:2,
     	rating:4
     	}
     );
     db.Review.create(
     	{
     	messageBody:"The young turks are famous for speaking truth to power and having the most amount of trolls anyone has ever seen",
     	UserFbId:"abc11abc27",
     	ChannelId:4,
     	rating:3
     	}
     );
     db.Review.create(
     	{
     	messageBody:"Secular Talk, AKA Kyle Kulinski, AKA the progressinator, a truly principled man with a wonderful comedic capacity",
     	UserFbId:"abc11abc25",
     	ChannelId:3,
     	rating:5
     	}
     );
     db.Review.create(
     	{
     	messageBody:"Ya boy Ethan the thicc boi, greatest man of all time without a doubt. all Praise lord Ethan.",
     	UserFbId:"abc11abc23",
     	ChannelId:1,
     	rating:5
     	}
     );
     db.Review.create(
     	{
     	messageBody:"Ethan Klein is certaily not underrated and I believe deserves alot more attention than he currently receives. However I really hope he goes back to regularly uploading so we can get some fresh hot memes",
     	UserFbId:"abc11abc24",
     	ChannelId:1,
     	rating:4
     	}
     );
     db.Review.create(
     	{
     	messageBody:"Pewds, the original nazi fan boy turned social justice target turned shamed swede turned literal ghost. This man changed what it meant to be a human target and contains to be my source of laughter on many occasions.",
     	UserFbId:"abc11abc26",
     	ChannelId:6,
     	rating:4
     	}
     );
     db.Review.create(
     	{
     	messageBody:"Kyle Kuliski is a liberal cuck who doesn't know anything about the world around him. Everyone would be better off just erasing the knowledge of this mans existence from their head",
     	UserFbId:"abc11abc29",
     	ChannelId:3,
     	rating:1
     	}
     );
    res.redirect("/stephanfile.html");
  });

   }
