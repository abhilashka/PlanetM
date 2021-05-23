
let isPlaying = false;
var curr_track;
function playsong(d) {

    console.log(d.getAttribute("id"))



    playpauseTrack(d.getAttribute("id"));



}


function playpauseTrack(d) {
    // Switch between playing and pausing
    // depending on the current state
    if (!isPlaying) playTrack(d);
    else pauseTrack();
}

function playTrack(d) {
    // Play the loaded track

    curr_track = new Audio(d)
    curr_track.play();
    isPlaying = true;

    // Replace icon with the pause icon
    // playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}

function pauseTrack(d) {
    // Pause the loaded track
    curr_track.pause();
    isPlaying = false;

    // Replace icon with the play icon
    // playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';;
}

