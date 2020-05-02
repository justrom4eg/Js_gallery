let prev = document.querySelector("#prev");
let next = document.querySelector("#next");

let arrOfImages = document.querySelectorAll(".gallery .images img");

let i = 0;

next.onclick = function () {
    arrOfImages[i].classList = "";
    i++;
    if (i >= arrOfImages.length){
        i = 0
    }
    arrOfImages[i].classList = "showed";
};

prev.onclick = function () {
    arrOfImages[i].classList = "";
    i--;
    if(i < 0){
        i = arrOfImages.length - 1
    }
    arrOfImages[i].classList = "showed"
}