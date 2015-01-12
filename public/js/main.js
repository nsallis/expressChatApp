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

function keyPress(e, form){
	var key=e.keyCode || e.which;
	if (key==13){
	socket.emit('message sent', document.getElementById('usertext').value);
	document.getElementById('usertext').value = "";
	}
}


socket.on('message', function(data) {
    document.getElementById("conversation").innerHTML += "</br>" + data;
});
