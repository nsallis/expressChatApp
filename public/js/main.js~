//this script supports the main html page and uses jquery
//we mostly send events to the server here
var socket = io.connect(window.location.hostname);

socket.on('status', function (data) {  
    $('#status').html(data.status);
});

socket.on('message', function(data) {
    document.getElementById("conversation").innerHTML = data;
});

$('#reset').click(function() {
    socket.emit('reset');
});


document.getElementById("send").onclick = function(){
	socket.emit('message sent', document.getElementById('usertext').value);
	console.log("message sent: " + document.getElementById('usertext').value);
};
//$('#send').click(function(){
//    socket.emit('message sent', $('#usertext').val());//sends the user's message to the server
//});
