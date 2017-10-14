

io.on('connection',function(socket){


  socket.on("message-from-client-chat",function(message){
    console.log(message);
    if (!users.includes(message.user)){
    users.push(message.user);
    console.log("users is"+users);
  } 
    socket.emit("updateChat",{users});
    socket.broadcast.emit("updateChat",{message,users:users});
  });

  socket.on("message-from-client-check-log-in-status",function(user){
    db.User.findOne({where:{
        fbId: user.id
    }}).then(function(x){
      console.log(x);
      //have to create socket subscriptions dynamically and disconnect them as soon as the socket disconnects
      
        if(x)
        {
          db.OnlineUser.create({
            UserFbid : user.id,
            ChannelId:user.ChannelId
          });

          socket.emit("message-from-server-in-response-to-connection",
                {
                  allowAccessToChat:true
                })
          socket.join('channel"+user.channelId');
          socket.to("channel"+user.channelId).emit('updateChat', {
            message:x.username + "joined!",
            usertoAdd: x.username
          });
          socket.on('updateChat',function(update){
              socket.to("channel"+user.channelId).emit('updateChat', 
              {
              message:update.message
              });
          });

          socket.on('disconnect',function()
          {

            db.OnlineUser.destroy({where:
              {
            UserFbid : user.id
              }
            });

          })
        }
        else
        {
              //if this is what is emitted the chat box has to be locked out and the user shouldn't be able to contribute. the user will however still be able to see the messages coming into the chat.

          socket.emit("message-from-server-in-response-to-connection",
                {
                  allowAccessToChat:false
                })

        }
    })


  })
/*
  Joining and leaving
You can call join to subscribe the socket to a given channel*/

io.on('connection', function(socket){
  socket.join('some room');
});
/*And then simply use to or in (they are the same) when broadcasting or emitting:
*/
io.to('some room').emit('some event');
 socket.removeAllListeners("message-from-client-chat");
  
})
