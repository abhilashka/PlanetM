$(document).ready(function () {

    $('#menu-search').hide()


    $('.searchform').hide()




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
    $('.searchform').show()

}


