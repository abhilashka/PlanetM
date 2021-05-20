// $(document).ready(function () {
//     var audioElement = document.createElement('audio');
//     audioElement.setAttribute('src', $('.active-song').attr('data-src'));

//     var tl = new TimelineMax();
//     tl.to('.player__albumImg', 3, {
//         rotation: '360deg',
//         repeat: -1,
//         ease: Power0.easeNone
//     }, '-=0.2');
//     tl.pause();

//     $('.player__play').click(function () {

//         if ($('.player').hasClass('play')) {
//             $('.player').removeClass('play');
//             audioElement.pause();
//             TweenMax.to('.player__albumImg', 0.2, {
//                 scale: 1,
//                 ease: Power0.easeNone
//             })
//             tl.pause();
//         } else {
//             $('.player').addClass('play');
//             audioElement.play();
//             TweenMax.to('.player__albumImg', 0.2, {
//                 scale: 1.1,
//                 ease: Power0.easeNone
//             })
//             tl.resume();
//         }

//     });


//     var playhead = document.getElementById("playhead");
//     audioElement.addEventListener("timeupdate", function () {
//         var duration = this.duration;
//         var currentTime = this.currentTime;
//         var percentage = (currentTime / duration) * 100;
//         playhead.style.width = percentage + '%';
//     });

//     function updateInfo() {
//         $('.player__author').text($('.active-song').attr('data-author'));
//         $('.player__song').text($('.active-song').attr('data-song'));
//     }
//     updateInfo();

//     $('.player__next').click(function () {
//         if ($('.player .player__albumImg.active-song').is(':last-child')) {
//             $('.player__albumImg.active-song').removeClass('active-song');
//             $('.player .player__albumImg:first-child').addClass('active-song');
//             audioElement.addEventListener("timeupdate", function () {
//                 var duration = this.duration;
//                 var currentTime = this.currentTime;
//                 var percentage = (currentTime / duration) * 100;
//                 playhead.style.width = percentage + '%';
//             });

//         } else {
//             $('.player__albumImg.active-song').removeClass('active-song').next().addClass('active-song');
//             audioElement.addEventListener("timeupdate", function () {
//                 var duration = this.duration;
//                 var currentTime = this.currentTime;
//                 var percentage = (currentTime / duration) * 100;
//                 playhead.style.width = percentage + '%';
//             });
//         }
//         updateInfo();
//         audioElement.setAttribute('src', $('.active-song').attr('data-src'));
//         audioElement.play();
//     });

//     $('.player__prev').click(function () {
//         if ($('.player .player__albumImg.active-song').is(':first-child')) {
//             $('.player__albumImg.active-song').removeClass('active-song');
//             $('.player .player__albumImg:last-child').addClass('active-song');
//             audioElement.addEventListener("timeupdate", function () {
//                 var duration = this.duration;
//                 var currentTime = this.currentTime;
//                 var percentage = (currentTime / duration) * 100;
//                 playhead.style.width = percentage + '%';
//             });
//         } else {
//             $('.player__albumImg.active-song').removeClass('active-song').prev().addClass('active-song');
//             audioElement.addEventListener("timeupdate", function () {
//                 var duration = this.duration;
//                 var currentTime = this.currentTime;
//                 var percentage = (currentTime / duration) * 100;
//                 playhead.style.width = percentage + '%';
//             });
//         }
//         updateInfo();
//         audioElement.setAttribute('src', $('.active-song').attr('data-src'));
//         audioElement.play();
//     });













// });






$(function () {
    var $songs = $('#songs');

    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/items',
        port: 3000,
        success: function (songs) {
            console.log(songs)
            $.each(songs, function (i, song) {
                // $songs.append('<div class="card md-col-2" style="width: 18rem;">  <div class="card-body"> <div class="card-title"> <h4>' + song.title + '</h4><div class="card-text"> ' + song.author + '</div>' + ' </div></div> </div>');
                //             $songs.append(
                //                 `



                //        <div class="player__albumImg " data-author="${song.track.artists[0].name}" data-song="${song.track.name}" data
                //        data-src=" ${song.track.preview_url}"
                //        style="background-image: url(${song.track.album.images[1].url})">
                //    </div>

                //             `)
            });
        }
    });

});







$(function () {
    var $loadsongs = $('#loadsongs');

    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/items',
        port: 3000,
        success: function (loadsongs) {
            $.each(loadsongs, function (i, song) {
                // $loadsongs.append('<div class="card md-col-2" style="width: 18rem;">  <div class="card-body"> <div class="card-title"> <h4>' + song.title + '</h4><div class="card-text"> ' + song.author + '</div>' + ' </div></div> </div>');
                $loadsongs.append(
                    `
                <div class="card"  id="play-song"  onclick="playsong()" >
                <div class="card-body"  >
                    <div class="image-logo" style="   background-image:url(${song.track.album.images[1].url});     background-size: 600px 600px;" >
                        <img src="${song.track.album.images[1].url}" alt="">
    

          
       </div>
       <div class="p1  " data-author="${song.track.artists[0].name}" data-song="${song.track.name}" data
       data-src=" ${song.track.preview_url}"
       style="background-image: url(${song.track.album.images[1].url})">
                    </div>
    
    
                </div>
    
                <div class="card-footer">
                    <div class="title">${song.track.name}</div>
                    <div class="artist">${song.track.artists[0].name} </div>
                    <div class="album">${song.track.album.album_type}</div>
    
                </div>

                
            </div>
    

                `)
            });
        }
    });




});


function playsong() {
    console.log('hello')


    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', $('.active-song').attr('data-src'));


    var tl = new TimelineMax();
    tl.to('.player__albumImg', 3, {
        rotation: '360deg',
        repeat: -1,
        ease: Power0.easeNone
    }, '-=0.2');
    tl.pause();

    if ($('.container-songs').hasClass('play')) {
        $('.container-songs').removeClass('play');
        audioElement.pause();
        TweenMax.to('.player__albumImg', 0.2, {
            scale: 1,
            ease: Power0.easeNone
        })
        tl.pause();
    } else {
        $('.container-songs').addClass('play');
        audioElement.play();
        TweenMax.to('.player__albumImg', 0.2, {
            scale: 1.1,
            ease: Power0.easeNone
        })
        tl.resume();
    };







    if ($('.p1').hasClass('.current-song')) {
        tl.pause();
        $('.p1').removeClass('current-song');

        audioElement.addEventListener("timeupdate", function () {
            var duration = this.duration;
            var currentTime = this.currentTime;
            var percentage = (currentTime / duration) * 100;
            playhead.style.width = percentage + '%';
        });


    } else {
        // $('.player__albumImg.current-song').removeClass('current-song').next().addClass('current-song');
        $('.p1').addClass('current-song');

        audioElement.addEventListener("timeupdate", function () {
            var duration = this.duration;
            var currentTime = this.currentTime;
            var percentage = (currentTime / duration) * 100;
            playhead.style.width = percentage + '%';
        });
    }
    updateInfo();
    audioElement.setAttribute('src', $('.current-song').attr('data-src'));
    audioElement.play();



}


function updateInfo() {
    $('.player__author').text($('.active-song').attr('data-author'));
    $('.player__song').text($('.active-song').attr('data-song'));
}



$(document).ready(function () {


    $('#play-song-active').click(function () {

        console.log("card body click")
    });


});

