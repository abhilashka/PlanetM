


// ---------------   This API is for loading music   --------------------//

let ajax1 = $.ajax({
  type: "GET",
  url: "http://localhost:3000/music",
  dataType: "json",
  async: true,
  success: function (data) {
    console.log("From the first requests");
    let products = "";
    $.each(data, function (i, v) {
      products += `
                <div class="resource-box"  >
                <div id="${v.url}" onclick="playsong(this)">
                <div class="song-image">
                <img class="img-fluid" src=${v.img} />
                </div>
                <div class="song-title">
                     <strong><span class="title">${v.name}</span></strong>
                 </div>
                 </div>
                 </div>
                 
            `

    })

    $(".inside-main-content").append(products)

  },
  error: function () {
    console.log("not able to process request");
  }

})


//This code is for search the music in the searcharea

$("#searchmusic").on("keyup", function () {
  let key = $(this).val().toLowerCase();
  console.log(key)

  $(".resource-box").filter(function () {
    $(this).toggle($(this).text().toLowerCase().indexOf(key) > -1);
  });
});

// After clicked on song

$("body").on('click', '.resource-box', function () {
  let songurl = $(this).attr('id');
  // alert("Played : " + songurl);
});

// });   

//After clicked on search button



//  $(document).ready(function() {
//   console.log("hello")
// Search
// function clickme(){
// // $('.xyz').click(function() {
//   $("#searchmusic").show();
//   console.log("hello")

// }
// if()
// {
//   $(this).addClass('search');
//   $("#searchmusic").show();
// }
// else
// {
//   $("#searchmusic").hide();
// }
// });



$(document).ready(function () {

  $(".xyz").click(function () {
    console.log(`clikck me `)
    $("#searchmusic").toggle();
  });
});

$(".dropdown-menu a").on("click", function () {
  var ak = $(this).attr("id");













})
//this API is for fetching the english songs

$(".dropdown-menu a").on("click", function () {

  var a_href = $(this).attr("id");
  console.log(a_href);

  $.ajax({
    type: "GET",
    url: "http://localhost:3000/music?language=" + a_href,
    dataType: "json",
    async: true,
    success: function (data) {
      console.log(data);
      let audios = "";
      $.each(data, function (i, v) {


        audios += `
          
        <div id="${v.url}" value="${v.language}" class="resource-box" onclick="playsong(this)" >
        <div class="song-image">
        <img class="img-fluid"  src=${v.img} />
        </div>
        <div class="song-title">
          <strong><span class="title">${v.name}</span></strong>
 
         </div>
         </div>


           `;
      });

      $(".inside-main-content").empty();
      $(".inside-main-content").append(audios);

    },


    error: function () {
      console.log("songs are not available");
    },


  });
});






/* */