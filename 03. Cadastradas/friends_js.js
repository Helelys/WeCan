const imgs = document.querySelectorById("img")
const img = document.querySelectorAll("#img img")

let idx = 0;

function carrossel(){
    idx++;

    if(idx > img.length - 1) {
        idx = 0;
    }

    imgs.style.transform = `translatex(${-idx * 300})`
}