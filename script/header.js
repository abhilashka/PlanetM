$(document).ready(function () {

    $('#menu-search').hide()


    $('.searchform').hide()

    if (sessionStorage.getItem('name') === null) {
        $('.btn-home-profile').hide()
        $('.btn-home-register').show()
        $('.btn-home-login').show()
     
    }
    else {
        $('.btn-home-register').hide()
        $('.btn-home-login').hide()
        $('.btn-home-profile').show()
        var profilename = sessionStorage.getItem('name')
        $('#dropdownMenu2').append(` ${profilename}`)
    }

   


})

function myFunction(x) {
    if (x.matches) { // If media query matches
        $('#menu-symbol').show()
        $('#menu-item').hide()

        $('.logo-text').hide()
        $('.btn-home-register').hide()

    } else {
        $('#menu-item').show()
        $('#menu-symbol').hide()
        $('.logo-text').show()


    }
}

var x = window.matchMedia("(max-width: 700px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes


function showme() {
    $('#menu-search').show()

}

function explore() {
    location.href = "./ui/discover.html"
}

function home() {
    location.href = "./index.html"
}


function library() {
    location.href = "./ui/playlist.html"
}

function search() {
    console.log('serch')
    $('.searchform').show()

}


function logout() {
    sessionStorage.removeItem('name');

    sessionStorage.removeItem('id');
    location.href = "../index.html";

}

function profile() {
    location.href = "./userprofile.html";

}

