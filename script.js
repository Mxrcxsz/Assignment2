//show anime
var y = document.getElementById("flex-container1");
var z = document.getElementById("flex-container2");
var yc = document.getElementById("manga");
var zc = document.getElementById("anime");
var ys = document.getElementById("s-icon");
var zs = document.getElementById("a-icon");
var check = true

function showAnime(){
    y.style.display = "none";
    z.style.display = "flex";
    if (check == true)
    {
        zc.style.backgroundColor = "black";
        zc.style.color = "white";
        zs.src = "img/shirt.png"
        yc.style.backgroundColor = "white";
        yc.style.color = "black";
        ys.src = "img/sneakers (1).png"
        check = false;
    }
}

//show manga
function showManga(){
    z.style.display = "none";
    y.style.display = "flex";
    if (check == false)
    {
        yc.style.backgroundColor = "black";
        yc.style.color = "white";
        ys.src = "img/sneakers.png"
        zc.style.backgroundColor = "white";
        zc.style.color = "black";
        zs.src = "img/shirt (1).png"
        check = true;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btnFetch').addEventListener('click', sendReq);
    //pretend to get a token after logging in
    sessionStorage.setItem('MyUniqueUserToken',
            'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjMzMzg1NjVjZmZjMDdiMzUxMTA1OTljMGNlY2UxNTI3OTdmMjZhOTI3MTM3MjgzNGM0MmVlZDgwYzhhZTQwZGQwNWQwMDAzZWQzYzZlZjk0In0.eyJhdWQiOiIxNzIyNjJhMWFhNjY3M2FhZGY1YThkNjc0NmNiODc5NyIsImp0aSI6IjMzMzg1NjVjZmZjMDdiMzUxMTA1OTljMGNlY2UxNTI3OTdmMjZhOTI3MTM3MjgzNGM0MmVlZDgwYzhhZTQwZGQwNWQwMDAzZWQzYzZlZjk0IiwiaWF0IjoxNjA5MDcxNDYyLCJuYmYiOjE2MDkwNzE0NjIsImV4cCI6MTYxMTc0OTg2Miwic3ViIjoiNjE2MjY5NyIsInNjb3BlcyI6W119.maPuR7HsZLPgS_6n6HNJbb-UDBcH1pzNhBMGjIxWef8STp0J-4dMfaurGSmYJeRjqAaI8F_L7dgvQ-GiRUAzB38JEPm180MABoOJ6r6U5DPE67K-16F8u8ODnpJgs-Dwmt0ZI9lavzOyMDpKQthO-45GFPz9eEWH53fDRcNT9ND0B2e6zkz3VrduQaglcQCx14T1jSjXXABhAF51ObwIhPPDp10nZlG6hRRu6DFSx_MWL94x6OHvS5CbzM0XiEYOc30zLd2ZKEze9nl7TPegU_a4w0ntXdLgfB8bKUjsVYvljOlTT0KwKP5hZgS5y_d3CrajDx6e6fytP9bT6o_i2w'
    );
});

let sendReq = (ev) => {
    let url = 'https://api.myanimelist.net/v2/users/@me';
    let token = sessionStorage.getItem('MyUniqueUserToken');

    let h = new Headers();
    h.append('Authentication', `Bearer ${token}`);

    let req = new Request(url, {
        method: 'GET',
        mode: 'cors',
        headers: h
    });
    fetch(req)
        .then(resp => resp.json())
        .then(data => {
            console.log(data);
        })
        .catch(err => {
            console.error(err.message);
        })
}