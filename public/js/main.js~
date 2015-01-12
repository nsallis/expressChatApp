//this script supports the main html page and uses jquery
//we mostly send events to the server here
var socket = io.connect(window.location.hostname);

socket.on('status', function (data) {  
    $('#status').html(data.status);
});

$('#reset').click(function() {
    socket.emit('reset');
});

document.getElementById("send").onclick = function(){
	socket.emit('message sent', document.getElementById('usertext').value);
	document.getElementById('usertext').value = "";
};

$("#chatform").submit(function() {
    socket.emit('message sent', document.getElementById('usertext').value);
    document.getElementById('usertext').value = "";
    return false;
});


socket.on('message', function(data) {
    document.getElementById("conversation").innerHTML += "</br>" + data;
});
