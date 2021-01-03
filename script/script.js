// var path = window.location.pathname;
// var page = path.split("/").pop();
// console.log(page);

//Fetch Data
function fetchTop(url,number){
    fetch(url)
    .then(response => response.json()) 
    .then(function(data){

    for(var i = 0; i<data.top.length; i++)
    {
        $("#flex-container" + number).append("<div class='flex-items'><a><div class='flex-items-container'><div class='imgContainer'><img src=" + data.top[i].image_url + "></div><article><div class='description'></div></article></div><p>Manga</p></a></div>");
    }
    });
}

let topAnimeUrl = 'https://api.jikan.moe/v3/top/anime/1/tv';
let topMangaUrl = 'https://api.jikan.moe/v3/top/manga/1/manga';
let z = document.getElementById("flex-container1");
let y = document.getElementById("flex-container2");
let yc = document.getElementById("manga");
let zc = document.getElementById("anime");
var check = true;
var a = 2;
var m = 2;
y.style.display = "none"

fetchTop(topAnimeUrl,1)
fetchTop(topMangaUrl,2)

//show anime
function showAnime(){
    y.style.display = "none";
    z.style.display = "flex";
    if (check == false)
    {
        zc.style.backgroundColor = "black";
        zc.style.color = "white";
        yc.style.backgroundColor = "white";
        yc.style.color = "black";
        check = true;
    }
}

//show manga
function showManga(){
    z.style.display = "none";
    y.style.display = "flex";
    if (check == true)
    {
        yc.style.backgroundColor = "black";
        yc.style.color = "white";
        zc.style.backgroundColor = "white";
        zc.style.color = "black";
        check = false;
    }
}

$(window).scroll(function() {
    if($(window).scrollTop() == $(document).height() - $(window).height()) {
        if(check == true){
            fetchTop("https://api.jikan.moe/v3/top/anime/" + a + "/tv",1);
            a+=1;
        }
        else{
            fetchTop("https://api.jikan.moe/v3/top/manga/" + m + "/manga",2);
            m+=1;
        }
    }
});