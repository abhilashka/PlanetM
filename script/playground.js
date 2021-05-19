$(document).ready(function () {
    // click on button submit
    $("#submit").on('click', function () {
        // send ajax
        $.ajax({
            url: 'http://localhost:3000/playlist/', // url where to submit the request
            type: "POST", // type of action POST || GET
            dataType: 'json', // data type
            data: $("#form").serialize(), // post data || get data
            success: function (result) {
                // you can see the result from the console
                // tab of the developer tools
                console.log(result);
            },
            error: function (xhr, resp, text) {
                console.log(xhr, resp, text);
            }
        })
    });
});



$(function () {
    var $playlist = $('#playlist');

    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/playlist',
        port: 3000,
        success: function (playlist) {
            console.log(playlist)
            $.each(playlist, function (i, song) {
                // $songs.append('<div class="card md-col-2" style="width: 18rem;">  <div class="card-body"> <div class="card-title"> <h4>' + song.title + '</h4><div class="card-text"> ' + song.author + '</div>' + ' </div></div> </div>');
                $playlist.append(
                    `
                   <div class="playlist-item">${song.title}</div>

                    `)
            });
        }
    });

});