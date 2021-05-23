
$(function () {
    var $songs = $('#songs');
    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/newrealese',
        port: 3000,
        success: function (songs) {
            $.each(songs, function (i, song) {
                $songs.append(
                    ` <div class="card1 resource-box">
                    <div class="card1-body">
                        <div class="image-logo" style=" background-image:url(${song.images[0].url}); background-size: 600px 600px;">
                            <img src="${song.images[0].url}" alt=""></img>
                        </div>
                    </div>
                    <div class="card1-footer">
                        <div class="title">${song.name}</div>
                        <div class="artist">${song.album_type} </div>
                        <div class="album">${song.artists[0].name}</div>
                    </div>
                </div>`
                )
            });
        }
    });

});



$(function () {
    var $hindi = $('#hindi');
    var $english = $('#english');
    var $marathi = $('#marathi');
    var $spanish = $('#spanish');

    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/music',
        port: 3000,
        success: function (songs) {
            $.each(songs, function (i, song) {
                if (song.language === "hindi") {
                    $hindi.append(
                        `<div class="card1 resource-box" id="${song.url}" onclick="playsong(this)">
                           <div class="card1-body">
                              <div class="image-logo" style="   background-image:url(${song.img});  background-size: 600px 600px;">
                                <img src="${song.img}" alt=""></img>
                              </div>
                             </div>
                           <div class="card1-footer">
                               <div class="title">${song.name}</div>
                               <div class="album">${song.artist}</div>
                            </div>
                        </div>
                    `)

                }


                if (song.language === "english") {
                    $english.append(
                        `<div class="card1 resource-box" id="${song.url}" onclick="playsong(this)">
                        <div class="card1-body">
                            <div class="image-logo" style="   background-image:url(${song.img});  background-size: 600px 600px;">
                                <img src="${song.img}" alt="">
                            </div>
                        </div>
                        <div class="card1-footer">
                            <div class="title">${song.name}</div>
                            <div class="album">${song.artist}</div>
                        </div>
                        </div>
                    `)

                }

                if (song.language === "marathi") {
                    $marathi.append(
                        `<div class="card1 resource-box" id="${song.url}" onclick="playsong(this)">
                        <div class="card1-body">
                            <div class="image-logo" style="   background-image:url(${song.img});  background-size: 600px 600px;">
                                <img src="${song.img}" alt="">
                            </div>
                        </div>
                        <div class="card1-footer">
                            <div class="title">${song.name}</div>
                            <div class="album">${song.artist}</div>
                        </div>
                        </div>
                    `)

                }


                if (song.language === "spanish") {
                    $spanish.append(
                        `<div class="card1 resource-box" id="${song.url}" onclick="playsong(this)">
                        <div class="card1-body">
                            <div class="image-logo" style="   background-image:url(${song.img});  background-size: 600px 600px;">
                                <img src="${song.img}" alt="">
                            </div>
                        </div>
                        <div class="card1-footer">
                            <div class="title">${song.name}</div>
                            <div class="album">${song.artist}</div>
                        </div>
                        </div>
                    `)

                }
            });
        }
    });

});






