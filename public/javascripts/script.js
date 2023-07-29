var socket = io();

socket.on('message', addMessage);

// Jquery: No refresh JS

function addMessage(message) {
    $(".fromMe").append(`<h4>${message.send}</h4>`)
}

function sendMessage(message) {
    $.post('http://localhost:3000/send', message);
}

function getMessage(){

    $.get('http://localhost:3000/send', (data) => {

        alert(data);
        data.forEach(addMessage)
    })
}

$(()=>{
    $("#send").click(() => {
        sendMessage({send: $(".msgbar").val()});
    })
    getMessage();
})
