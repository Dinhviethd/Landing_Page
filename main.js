const open_button= document.getElementById('menu_button')
const close_button= document.getElementById("")
const header= document.querySelector(".responsive_icon")
function open(){
    if (header.style.display == "none")
    header.style.display="block"
    else header.style.display="none"
}
open_button.addEventListener("click", open)
// Benefit
const first_benefit= document.querySelector(".first_img")
const second_benefit= document.querySelector(".second_img")
const third_benefit= document.querySelector(".third_img")
const img= document.querySelector(".benefit_img")
function select_img1(){
    img.src= "https://demo.epic-webdesign.com/tf-launchpage/v1/images/about2.jpg" 
}
function select_img2(){
    img.src= "https://demo.epic-webdesign.com/tf-launchpage/v1/images/about5.jpg"
}
function select_img3(){
    img.src= "https://demo.epic-webdesign.com/tf-launchpage/v1/images/about1.jpg"
}
first_benefit.addEventListener("click", select_img1)
second_benefit.addEventListener("click", select_img2)
third_benefit.addEventListener("click", select_img3)



const openVideo = document.getElementById('open-video');
const closeVideo = document.getElementById('close-video');
const overlay = document.getElementById('overlay_video');
const videoPopup = document.getElementById('video-popup');

// Mở video
openVideo.addEventListener('click', () => {
    overlay.style.display = 'block';
    videoPopup.style.display = 'block';
});

// Đóng video
closeVideo.addEventListener('click', () => {
    overlay.style.display = 'none';
    videoPopup.style.display = 'none';
});

// Đóng video khi nhấn vào overlay
overlay.addEventListener('click', () => {
    overlay.style.display = 'none';
    videoPopup.style.display = 'none';
});
