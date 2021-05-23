$(document).ready(function () {
    $("#submit").on('click', function () {
        let playlistz={
            title:$("#title").val(),
            description:$("#description").val(),
            user_id:sessionStorage.getItem("id")
        }
        $.ajax({
            url: 'http://localhost:3000/playlist/', 
            type: "POST", 
            dataType: 'json', 
            data:playlistz,
            success: function (result) {
                console.log(playlistz);
            },
            error: function (xhr, resp, text) {
                console.log(xhr, resp, text);
            }
        })
    });
});



$(function () {
    var $playlist = $('#playlist');
    var current_user=sessionStorage.getItem("id");
    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/playlist',
        port: 3000,
        success: function (playlist) {
            console.log(playlist)
            $.each(playlist, function (i, song) {
                if(sessionStorage.getItem("id")!=null){
                    if(song.user_id==current_user){
                $playlist.append(
                    `
                   <div class="playlist-item">${song.title}</div>

                    `)
                }
            }
            });
        }
    });

});