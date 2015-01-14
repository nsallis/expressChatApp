//this script supports the main html page and uses jquery
//we mostly send events to the server here
var socket = io.connect(window.location.hostname);

socket.on('status', function (data) {  
    $('#status').html(data.status);
});

$('#reset').click(function() {
    socket.emit('reset');
});

window.onload = function(){
document.getElementById("username").defaultValue = "User_" + Math.floor(Math.random() * 100) + 1;
}

document.getElementById("send").onclick = function(){
if(document.getElementById("usertext").value != ""){
	socket.emit('message sent', "|" + document.getElementById("username").value + "|" + document.getElementById('usertext').value);//send the text with the username surrounded by "|"
	document.getElementById('usertext').value = "";
	}
};

$('chatform').submit(function(){
	if(document.getElementById("usertext").value != ""){
	socket.emit('message sent', "|" + document.getElementById("username").value + "|" + document.getElementById('usertext').value);//send the text with the username surrounded by "|"
	document.getElementById('usertext').value = "";
	}
return false;
});



socket.on('message', function(data) {
   	var start = data.indexOf('|') + 1;
    	var end = data.indexOf('|', start);
    	var user = data.substring(start, end)
    	var text = data.substring(end+1);
   	document.getElementById("conversation").innerHTML += "</br></br>" + user.bold() + "</br>" + text;
});
