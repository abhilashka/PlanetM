var token = `BQAQyS_zL92y6uFm4GtHbCrj4HMsY7FyteMcgCKhgIp7756-46VYSQxaq-k8hPRgQnV1NlX7yzLi-yVRbptvfqxoMjOWlBb5gFuDMi6Z0nlV1-DbE5lPZqC2egjaV8cjHB2Ae2ZkDT_JUbd0siDkGP_-CtJSm2IgZYFb_mecqzkxT-e9QFharWRnmO5brrkrpBBgEoB7OfsHQzl3Dp7ux8nRKOnR7uTpv0rdHoTb3cPXfh4fSMqwoRYR1F_LAh5Z_mJ4aQiLiuwOYeo7Nu9nJXy8dwiuCuvOd3-Oy7GU0_dK`;


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
                $playlist.append(

                    `
                    <div class="item resource-box playlist-list" id="${song.id}">
                    <span>${song.description}</span>

                    <img src="${song.images[0].url}" alt="img"> </img>
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

            $.each(data.items, function (i, song) {
                $tracks.append(

                    `
                    <div class="item resource-box" id="">
                    <span>${song.track.name}</span>

                    <img src="${song.track.album.images[1].url}" alt="img"> </img>
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