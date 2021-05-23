var token = `BQBD2n-pX2ZbvUpn64rrCoL0mey69Z7zLzqoD6IUCOdwJlhrkeCUSd_vNXvah6FoH_3Q9il0-HIpIZf-uF7r6yyVUnt6cPOdR0-J7YIg9aBUuhHOxROddcxBoYIav1u_ZFlwm442t9Z7EtJZN4nvpB9WgITl1p1nUUG6qd7OHqD7d6WLE7P-Gj07qEBZGFyFSy8K8FWGuZS2x8z0SM1o1XmXDO-ifXo3--bN3Q4d_noA04fMZ3LuxaB-z0IoFa2ReVdicnZ0pj63dDLAZhY_-mbbI9O3NyEvWKMa7pIMLIFP`;
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
            $('.container.discover-container').hide()

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
    $('.container.discover-container').hide()

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
            $('.container.discover-container').show()

            console.log(data.items)
            let index = 1;
            $.each(data.items, function (i, song) {


                let duration = millisToMinutesAndSeconds(`${song.track.duration_ms}`)

                $tracks.append(

                    `
                    <tr class="resource-box">
                    <td scope="row">${index}</td>
                    <td  >
                    <img src="${song.track.album.images[1].url}"  style="width:40px; height:40px; border-radius:50% "></img>
                     <a href="#" id= ${song.track.preview_url} onclick="playsong(this)">${song.track.name} </a>  ,    <span style="color:rgb(75, 74, 74); font-style: italic;">  ${song.track.artists[0].name}</span> </td>
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
