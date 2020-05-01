let prev = document.querySelector("#prev");
let next = document.querySelector("#next");

let arrOfImages = document.querySelectorAll(".gallery .images img");

let i = 0;

next.onclick = function () {
    arrOfImages[i].style.display = "none";
    i++;
    if (i >= arrOfImages.length){
        i = 0
    }
    arrOfImages[i].style.display = "block";
};

prev.onclick = function () {
    arrOfImages[i].style.display = "none";
    i--;
    if(i < 0){
        i = arrOfImages.length - 1
    }
    arrOfImages[i].style.display = "block"
}