let img = document.getElementById('change');
let button = document.getElementById('button');

button.addEventListener("click", changeNow);

function changeNow() {
  if (img.style.backgroundImage === 'url("pic_back1.jpg")') {    
    img.style.backgroundImage = 'url("gordon_not_freeman.png")';
  } else {
    img.style.backgroundImage = 'url("pic_back1.jpg")';
  }
}