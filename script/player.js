
$(document).ready(function () {
    $('#pause').hide()

});


let isPlaying = false;
var track_details;
function playsong(d) {

    console.log(d.getAttribute("id"))

    track_details = new Object();

    track_details.img = d.getAttribute("track-img");
    track_details.id = d.getAttribute("id");
    track_details.name = d.getAttribute("track-name");
    track_details.artist = d.getAttribute("track-artist");

    playpauseTrack(track_details);



}


function playpauseTrack(d) {
    // Switch between playing and pausing
    // depending on the current state
    if (!isPlaying) playTrack(d);
    else pauseTrack();
}

function playTrack(d) {
    // Play the loaded track

    curr_track = new Audio(d.id)
    curr_track.play();
    isPlaying = true;

    // Replace icon with the pause icon
    // playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
    $('#pause').show()
    $('#play').hide()

    $(function () {
        var $trackimage = $('#trackimage');
        var $trackdetails = $('#trackdetails');
        trackimage.innerHTML = `<img src="${d.img}" alt="img">`
        trackdetails.innerHTML = `<marquee>${d.name}, ${d.artist}</marquee>`


    })


    $('#play').click(function () {
        $('#play').hide()
        $('#pause').show()
        curr_track.play()
    })

    $('#pause').click(function () {
        $('#pause').hide()

        $('#play').show()

        pauseTrack(track_details)

    })

}

function pauseTrack(d) {
    // Pause the loaded track
    curr_track.pause();
    isPlaying = false;

}

