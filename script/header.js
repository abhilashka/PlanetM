

function explore() {
    location.href = "./ui/discover.html"
}

function home() {
    location.href = "./index.html"
}


function library() {
    location.href = "./ui/playlist.html"
}

function login() {
    location.href = "./ui/login.html"
}

// $(".lgn-btn").hide();
// $(".lgt-btn").hide();


console.log(localStorage.getItem('name'));

if(localStorage.getItem('name')==null)
{
    $(".lgn-btn").show();
    $(".lgt-btn").hide();
}
else{
    $(".lgt-btn").show();
    $(".lgn-btn").hide();
}


$('.lgt-btn').click(function(){
    console.log("logging out");
    if (confirm("U sure?")) {
        
            localStorage.removeItem('name');
            }
        
      
    
});