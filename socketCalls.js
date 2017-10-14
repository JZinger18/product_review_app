module.exports = function(socket,user){

socket.join(`${channelId}`);

		socket.on("chat",function(message)
	{
	socket.to(`${channelId}`).emit("chat",{message,user});
	});

}