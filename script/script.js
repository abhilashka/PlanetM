$(function () {
    var $orders = $('#orders');

    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/posts',
        port: 3000,
        success: function (orders) {
            $.each(orders, function (i, order) {
                // $orders.append('<div class="card md-col-2" style="width: 18rem;">  <div class="card-body"> <div class="card-title"> <h4>' + order.title + '</h4><div class="card-text"> ' + order.author + '</div>' + ' </div></div> </div>');
                $orders.append(
                    `
                    <div class= "card" style = "width: 200px; ">
                    <div class="card-body" style=" background-image: url('${order.images[0].url}');">
                   
                    <img src="${order.images[0].url}" alt="img">

                    </div>`+ `

                    <div class="card-footer">
                        <a href="#" class="card-link">${order.name}</a>
                        <p>Album: <a href="#">${order.album_type} </a>
                        Artist: <a href="#">${order.artists[0].name} </a>
           
                        </p>
                    </div>
                    </div >

                    `)
            });
        }
    });
});


