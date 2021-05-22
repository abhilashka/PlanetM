

$(function () {
    var $songs = $('#songs');

    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/newrealese',
        port: 3000,
        success: function (songs) {
            $.each(songs, function (i, song) {
                // $songs.append('<div class="card md-col-2" style="width: 18rem;">  <div class="card-body"> <div class="card-title"> <h4>' + song.title + '</h4><div class="card-text"> ' + song.author + '</div>' + ' </div></div> </div>');
                $songs.append(
                    `
                    <div class="card1">
                    <div class="card1-body"  >
                        <div class="image-logo" style="   background-image:url(${song.images[0].url});     background-size: 600px 600px;"
                           >
                            <img src="${song.images[0].url}" alt="">
        
                        </div>
        
        
                    </div>
        
                    <div class="card1-footer">
                        <div class="title">${song.name}</div>
                        <div class="artist">${song.album_type} </div>
                        <div class="album">${song.artists[0].name}</div>
        
                    </div>
                </div>
        

                    `)
            });
        }
    });

});












