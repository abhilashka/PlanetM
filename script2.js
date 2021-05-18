$(function () {
    var $songs = $('#songs');
    var token = `BQDMIzd4Yt9ELbv2hMU8ZtyTbsAWrTmquiN0_X6wgvR1XO9rBLEJx3h5CUmu5vu7nfxJd4qFkBHz0SiJEDqGX_qsbrdgBDDWeO-09t2dDGC2Cv4EleZnaJVCgUJkiXONUmk1Z6Lzz2IM24q5s7LcHop5C36APbpeJ3VkqKc2EICYDanIyJVYRUqCSubtpEofrLW2ggdb8_o_vV76_zIF4jZLUcCeSzvWLfMuIwBcMCSZ_0tlL0V3GnzduScHc63U3Guxyhng1DX-H04usd07AAWA481kY-YPLHgtJkirj7Fk`;
    $.ajax({
        type: 'GET',

        url: 'https://api.spotify.com/v1/browse/categories?limit=50',
        Accept: 'application/json',


        contentType: 'application/json',
        headers: {
            'Authorization': `Bearer ${token}`,
        },
        success: function (data) {
            console.log(data.categories.items)

            $.each(data.categories.items, function (i, song) {
                $songs.append(

                    `
                    <div class="item">
                    <span>${song.name}</span>

                    <img src="${song.icons[0].url}" alt="img"> </img>
                    </div>
                    `
                )

            });



        },
        error: function (error) {
            console.log(error);
        }
    });

});


