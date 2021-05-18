$(function () {
    var $songs = $('#songs');
    var token = `BQBZRDUIAdFvq2Ls6wTx2NKHM3CJqdb5kcxCWywLDg1O7qhnwhLghnMzpvv33MfQVTRDb7-Mf8EN-jkwg_pgHxawRqyCTpa2e9wieV_jcMhQ7B0Q1VGBL8Os0t6gSSq1Gl7ID_KP_0GHtrw375HB5KeuP3SQ9pVyCZpeB-hXUwrNs2t2V843NrXUtdIs7QbSodCbkQzX_LhqwbDbdN99voXOSqpF_YJx8wXXmE1uoW61PJAORf3UuS6_plyZMeNd2udJlvlTjRIOnLKp4p2cpq00ip4USPNA2Y_JLGGgO_mS`;
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


