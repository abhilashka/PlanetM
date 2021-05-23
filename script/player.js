

function playsong(d) {

    console.log(d.getAttribute("id"))


    var audioElement = document.createElement('audio');

    audioElement.setAttribute('src', d.getAttribute("id"));



    if (audioElement.play()) {
        audioElement.pause()

    }

    audioElement.play();


    $('#play-pause').click(function () {

        audioElement.pause()


    })

}

