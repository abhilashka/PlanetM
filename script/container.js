// $(function () {
//     var $songs = $('#songs');

//     $.ajax({
//         type: 'GET',
//         url: 'http://localhost:3000/posts',
//         port: 3000,
//         success: function (songs) {
//             $.each(songs, function (i, song) {
//                 // $songs.append('<div class="card md-col-2" style="width: 18rem;">  <div class="card-body"> <div class="card-title"> <h4>' + song.title + '</h4><div class="card-text"> ' + song.author + '</div>' + ' </div></div> </div>');
//                 $songs.append(
//                     `
//                     <div class= "card" style = "width: 12rem; ">
//                     <div class="card-body" style="  width:10rem;">

//                     <img src="${song.images[0].url}" alt="img" style="width:8rem;">

//                     </div>`+ `

//                     <div class="card-footer" style = "width: 1rem; ">
//                         <a href="#" class="card-link">${song.name}</a>
//                         <p>Album: <a href="#">${song.album_type} </a>
//                         <br>
//                         Artist: <a href="#">${song.artists[0].name} </a>

//                         </p>
//                     </div>
//                     </div >

//                     `)
//             });
//         }
//     });

// });



{/* <div class="container">
            <div class="image">
                <div class="image-logo"
                    style="   ${song.images[0].url};">
                    <img src="${song.images[0].url}" alt="">

                </div>


            </div>

            <div class="footer">
                <div class="title">Title: ${song.name}</div>
                <div class="artist">Artist: ${song.album_type} </div>
                <div class="album">Album: ${song.artists[0].name}</div>

            </div>
        </div> */}








$(function () {
    var $songs = $('#songs');

    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/newrealese',
        port: 3000,
        success: function (songs) {
            $.each(songs, function (i, song) {
                // $songs.append('<div class="card md-col-2" style="width: 18rem;">  <div class="card-body"> <div class="card-title"> <h4>' + song.title + '</h4><div class="card-text"> ' + song.author + '</div>' + ' </div></div> </div>');
                $songs.append(
                    `
                    <div class="card">
                    <div class="card-body"  >
                        <div class="image-logo" style="   background-image:url(${song.images[0].url});     background-size: 600px 600px;"
                           >
                            <img src="${song.images[0].url}" alt="">
        
                        </div>
        
        
                    </div>
        
                    <div class="card-footer">
                        <div class="title">${song.name}</div>
                        <div class="artist">${song.album_type} </div>
                        <div class="album">${song.artists[0].name}</div>
        
                    </div>
                </div>
        

                    `)
            });
        }
    });

});












