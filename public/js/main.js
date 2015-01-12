//this script supports the main html page and uses jquery
//we mostly send events to the server here
var socket = io.connect(window.location.hostname);

socket.on('status', function (data) {  
    $('#status').html(data.status);
});

//socket.on('message', function(data) {
//    $('#conversation'.html(data.text);
//});

$('#reset').click(function() {
    socket.emit('reset');
});

//$('#send').click(function(){
//    socket.emit('message sent', $('#usertext').val());//sends the user's message to the server
//});
