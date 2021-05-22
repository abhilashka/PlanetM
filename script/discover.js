var token = `BQAmu4PV1Je9r2s3RV5-cUuOcghsu93Esy4yBfcefw1yVRso37noCaRH4VYjt4-YyC9DybwB3SCDnUC8hwFkczUXhaib0iBJDbvPDO9PrQUrFFeWqn3WUoNd3f30IbgJLz6ELjF3n5JLQwHvY8ATpjci0vW8XJsx_4LJUgfsFkO0KezPr2gyEkZcZgeJLTsTWBeRF0EwHCFzH-5oVV8PixsWPeBuNGEpd_ZS9fxYIJciHH42fi4TwY1Kq78VdpFhSySxkJW2RL--fG8UEIF-iUdESY-qs2IwDroX3CT_p0OR`;


$(function () {
    var $songs = $('#songs');
    $.ajax({
        type: 'GET',

        url: 'http://localhost:3000/categories',
        Accept: 'application/json',


        contentType: 'application/json',
        headers: {
            'Authorization': `Bearer ${token}`,
        },
        success: function (data) {
            console.log(data.items)

            $.each(data.items, function (i, song) {
                $songs.append(

                    `
                    <div class="item resource-box category-list" id="${song.id}">
                    <span>${song.name}</span>

                    <img src="${song.icons[0].url}" alt="img"> </img>
                    </div>
                    `
                )

            });



        },
        error: function (error) {
            console.log(error);
        }
    });

});




$("body").on('click', '.category-list', function () {

    $('.category').hide()

    let category_id = $(this).attr('id');
    console.log("id : " + category_id);
    // location.href = "./categoryplaylist.html";

    var $playlist = $('#playlist');



    $.ajax({
        type: 'GET',

        url: `https://api.spotify.com/v1/browse/categories/${category_id}/playlists`,
        Accept: 'application/json',


        contentType: 'application/json',
        headers: {
            'Authorization': `Bearer ${token}`,
        },
        success: function (data) {
            console.log(data.playlists.items)

            $.each(data.playlists.items, function (i, song) {


                $playlist.append(`
                <div class="resource-box playlist-list" style="width: 12rem;" id="${song.id}">
                <img class="card-img-top" src="${song.images[0].url}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title" style="color:white;">
                        ${song.name}
                    </h5>
                    <p class="card-text">${song.description}.</p>
                   
                </div>
            </div>`)

            });



        },
        error: function (error) {
            console.log(error);
        }
    });


});




$("body").on('click', '.playlist-list', function () {

    $('.playlist').hide()

    let playlist_id = $(this).attr('id');
    console.log("id : " + playlist_id);
    // location.href = "./categoryplaylist.html";

    var $tracks = $('#tracks');



    $.ajax({
        type: 'GET',

        url: `https://api.spotify.com/v1/playlists/${playlist_id}/tracks`,
        Accept: 'application/json',


        contentType: 'application/json',
        headers: {
            'Authorization': `Bearer ${token}`,
        },
        success: function (data) {
            console.log(data.items)
            let index = 314;
            $.each(data.items, function (i, song) {


                let duration = millisToMinutesAndSeconds(`${song.track.duration_ms}`)

                $tracks.append(

                    `
                    <tr class="resource-box">
                    <td scope="row">${index}</td>
                    <td>
                    <img src="${song.track.album.images[1].url}" style="width:40px; height:40px; border-radius:50% "></img>
                     <a href="">${song.track.name} </a>  ,    <span style="color:rgb(75, 74, 74); font-style: italic;">  ${song.track.artists[0].name}</span> </td>
                    <td>${duration}</td>
                    </tr> 
                    `
                )
                index = index + 1

            });



        },
        error: function (error) {
            console.log(error);
        }
    });

    function millisToMinutesAndSeconds(millis) {
        var minutes = Math.floor(millis / 60000);
        var seconds = ((millis % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }
});






/* <div>{
    "id": "${index}",
    "url": "${song.track.preview_url}",
    "name" : "${song.track.name}" ,
    "language":" ", 
    "img" : "${song.track.album.images[1].url}",
     "artist" :  "${song.track.artists[0].name}"
},
</div> */


{/* <tr class="resource-box">
<td scope="row">${index}</td>
<td>
<img src="${song.track.album.images[1].url}" style="width:40px; height:40px; border-radius:50% "></img>
 <a href="">${song.track.name} </a>  ,    <span style="color:rgb(75, 74, 74); font-style: italic;">  ${song.track.artists[0].name}</span> </td>
<td>${duration}</td>
</tr> */}
