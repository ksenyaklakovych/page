$(function() {
    $('#btn-send').click(sendForm);
});

function sendForm(e) {
    e.preventDefault();
    $.ajax({
        url: "https://formspree.io/kklakovych@gmail.com",
        method: "POST",
        data: {
            name: $('#name').val(),
            email: $('#email').val(),
            message: $('#message').val()
        },
        dataType: "json",
        success: function(){
            $('#thanks').html('Thank you for contacting me!');
        }
    });
};