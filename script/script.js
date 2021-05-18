// $(function () {
//     var $orders = $('#orders');

//     $.ajax({
//         type: 'GET',
//         url: 'http://localhost:3000/posts',
//         port: 3000,
//         success: function (orders) {
//             $.each(orders, function (i, order) {
//                 // $orders.append('<div class="card md-col-2" style="width: 18rem;">  <div class="card-body"> <div class="card-title"> <h4>' + order.title + '</h4><div class="card-text"> ' + order.author + '</div>' + ' </div></div> </div>');
//                 $orders.append(
//                     `
//                     <div class= "card" style = "width: 200px; ">
//                     <div class="card-body" style=" background-image: url('${order.images[0].url}');">
                   
//                     <img src="${order.images[0].url}" alt="img">
//                     <img  class="play" src="https://i.pinimg.com/originals/ef/07/47/ef07471474a0e1086a185086c342ae00.jpg" alt="">

//                     </div>`+ `

//                     <div class="card-footer">
//                         <a href="#" class="card-link">${order.name}</a>
//                         <p>Album: <a href="#">${order.album_type} </a>
//                         Artist: <a href="#">${order.artists[0].name} </a>
           
//                         </p>
//                     </div>
//                     </div >

//                     `)
//             });
//         }
//     });
// });



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
                <div class="resource-box">
                <div id=${v.url}>
                <div class="song-image">
                <img class="img-fluid" src=${v.img} />
                </div>
                <div class="song-title">
                     <strong><span>${v.name}</span></strong>
                     <p>${v.id}</p>
                 </div>
                 </div>
                 </div>
            `

        })
        
        $(".inside-main-content").append(products)

    },
    error:function(){
        console.log("not able to process request");
       }

    })     
    


    $("#searchmusic").on("keyup",function()
    {
       let key = $(this).val().toLowerCase();
       console.log(key)

       $(".resource-box").filter(function ()
       {
           $(this).toggle($(this).text().toLowerCase().indexOf(key) > -1);
       });
    });

    // After clicked on song

     $("body").on('click','.resource-box', function(){
         let songurl = $(this).attr('id');
         alert("Played : "+songurl);
     });

 // });   


    






 