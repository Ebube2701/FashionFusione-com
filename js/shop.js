let bar = document.getElementById("bar")
let nav = document.getElementById("nv")

bar.onclick = () => {
    nav.classList.toggle("active")
}


let maiImg = document.getElementById("mainImg")
function mainImg(img) {
    maiImg.src = img;
}

let size = document.querySelectorAll(".sizes li buttton")

for (let i = 0; i < size.length; i++){
    size[i].onclick = function () {
        size.forEach((e) => {
           e.classList.remove("sizeActive")  
        })
        if(size[i].classList != "sizeActive") {
           size[i].classList.add("sizeActive")
        }
    }
}