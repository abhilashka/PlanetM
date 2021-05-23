

function playsong(d) {

    console.log(d.getAttribute("id"))


    var audioElement = new Audio(d.getAttribute("id"))




    d.setAttribute("track", "playing");



    if ($('div').hasClass('play')) {
        $('div').removeClass('play');
        audioElement.pause();

    } else {
        $('div').addClass('play');
        audioElement.play();

    }




    $('#play-pause').click(function () {

        audioElement.pause()


    })

}

