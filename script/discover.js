var token = `BQDvYBADzJ6KqlyHebBzcQ4I1Y0ENWg_yI234OWhX2abE0XPnUsQVCota0H6-oPpo55KtCerz7MKCxVERpN7J7jt1sD2Cyf-zHLzcEI3kTc27atAdufYPpcsF3_9KzdD2HUuLo4TE-zVn5t9GHodd2bPfmUEHDBrVw00aR_c5QUAo0eAJLV_T_p-j8FGn4SRazmaB0emtgEmEl1o-OArX5JMjGS4-6rVG4USfoVbX0cy02HYPulNJ0TzJoqcI-B0n90HZ13jnYTEDNnKOkr2GIvyKVarbHjhF6kQ34PsuTqA`;

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
                            <h5 class="card-title" style="color:white;"> ${song.name}</h5>
                            <p class="card-text">${song.description}.</p>
                        </div>
                     </div>
            `)
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
                    <tr class="resource-box" >
                    <td scope="row">${index}</td>
                    <td  >
                    <img src="${song.track.album.images[1].url}"  style="width:40px; height:40px; border-radius:50% "></img>
                     <span class="trackdetailsspan" id= "${song.track.preview_url}" onclick="playsong(this)" track-img="${song.track.album.images[1].url}" track-name="${song.track.name}"  track-artist="${song.track.artists[0].name}">${song.track.name}  </span>  ,    <span style="color:rgb(75, 74, 74); font-style: italic;">  ${song.track.artists[0].name}</span> </td>
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

