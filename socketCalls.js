

module.exports = function(socket,user){

socket.join(`${user.channelId}`);

		socket.on("chat",function(message)
	{
	socket.to(`${channelId}`).emit("chat",{message,user});
	});

}