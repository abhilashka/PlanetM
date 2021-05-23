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


// $(document).ready(function () {

//     var audioElement = document.createElement('audio');
//     // audioElement.setAttribute('src', 'https://p.scdn.co/mp3-preview/2c7827204e4d95477a9777ec274d8c4c361e7d83?cid=774b29d4f13844c495f206cafdad9c86');



//     $('.card').click(function () {

//         var song = $('.image-logo').click().attr('data-src')
//         audioElement.setAttribute('src', song);

//         if ($('.image-logo').hasClass('play')) {
//             $('.image-logo').removeClass('play')
//             audioElement.pause()

//         } else {
//             audioElement.play()
//             $('.image-logo').addClass('play')

//         }

//     })

//     $('.play-pause').click(function () {

//         if ($('.play-pause').hasClass('play')) {
//             $('.play-pause').removeClass('play')
//             audioElement.pause()

//         }
//         else {
//             audioElement.play()
//             $('.play-pause').addClass('play')

//         }
//     })




// })


function playsong(d) {

    console.log("d :" + d)

    console.log(d.getAttribute("id"))

    var audioElement = document.createElement('audio');

    audioElement.setAttribute('src', d.getAttribute("id"));

    if (audioElement.play()) {
        audioElement.pause()
    }
    audioElement.play();

 

}


   $('#play-pause').click(function () {

        audioElement.pause()


    })