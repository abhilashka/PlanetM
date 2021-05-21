let songsList=[];
let iValue=0;

$(document).ready(function () {
    AudioPlayer();
    $("#myAudio").attr('src',songsList[iValue].songPath)

    // click on button submit
    $("#submit").on('click', function () {
        // send ajax
        $.ajax({
            url: 'http://localhost:3000/playlist/', // url where to submit the request
            type: "POST", // type of action POST || GET
            dataType: 'json', // data type
            data: $("#form").serialize(), // post data || get data
            success: function (result) {
                // you can see the result from the console
                // tab of the developer tools
                console.log(result);
            },
            error: function (xhr, resp, text) {
                console.log(xhr, resp, text);
            }
        })
    });
});

function PlaySong(){

    //         iVlaue
    // play -> 0
    // next  -> iValue ++   ivalue>=songLIst.length  ivalue =0    
    //previous -> ivalue --   0<=ivalue
    $("#myAudio").attr('src',songsList[iValue].songPath)
}

function NextSong(){
    if( iValue>=songsList.length)
    {
        iValue=0
    }
    else iValue++
    $("#myAudio").attr('src',songsList[iValue].songPath)
}

/*function PreviousSong(){
    iValue=0
    // Start position 
    if (iValue == 0) {
  
        // Add disabled attribute on
        // prev button
        document.getElementsByClassName(
                'PreviousSong').disabled = true;

        // Remove disabled attribute 
        // from next button 
        document.getElementsByClassName(
                'NextSong').disabled = false;
    } else {
        iValue--;
        return setNo();
    }

}*/


$(function () {
    var $playlist = $('#playlist');

    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/playlist',
        port: 3000,
        success: function (playlist) {
            console.log(playlist)
            $.each(playlist, function (i, song) {
                // $songs.append('<div class="card md-col-2" style="width: 18rem;">  <div class="card-body"> <div class="card-title"> <h4>' + song.title + '</h4><div class="card-text"> ' + song.author + '</div>' + ' </div></div> </div>');
                $playlist.append(
                    `
                   <div class="playlist-item">${song.title}</div>

                    `)
            });
        }
    });

});

function AudioPlayer(){
    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/songs',
        port: 3000,
        success: function (songs) {
            songsList=songs;
        }
    });
}
           
        
