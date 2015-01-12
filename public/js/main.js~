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
};

$("#id_of_textbox").keyup(function(event){//enter pushed in textbox (input field)
    if(event.keyCode == 13){
        socket.emit('message sent', document.getElementById('usertext').value);
    }
});

socket.on('message', function(data) {
    document.getElementById("conversation").innerHTML += </br> + data;
});
