// Menu Button Responsive
const open_button= document.getElementById('menu_button')
const close_button= document.getElementById("")
const header= document.querySelector(".responsive_icon")
function open(){
    if (header.style.display == "none")
    header.style.display="block"
    else header.style.display="none"
}
open_button.addEventListener("click", open)


// Change Image in Benefit
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


// Open & Close video
const openVideo = document.getElementById('open-video');
const closeVideo = document.getElementById('close-video');
const overlay = document.getElementById('overlay_video');
const videoPopup = document.getElementById('video-popup');
const iframe= document.querySelector('iframe');
const videoSrc = iframe.src;
openVideo.addEventListener('click', () => {
    overlay.style.display = 'block';
    videoPopup.style.display = 'block';
});
closeVideo.addEventListener('click', () => {
    overlay.style.display = 'none';
    videoPopup.style.display = 'none';
    iframe.src = ''; 
    iframe.src = videoSrc;
});

overlay.addEventListener('click', () => {
    overlay.style.display = "none";
    videoPopup.style.display = 'none';
    iframe.src = ''; 
    iframe.src = videoSrc;
});


// Detailed Information in What People Are Saying
let slideIndex = 1;

// Mở modal
function openModal() {
    document.getElementById('imageModal').style.display = 'block';
}

// Đóng modal
function closeModal() {
    document.getElementById('imageModal').style.display = 'none';
}

// Thay đổi slide
function plusDivs(n) {
    showDivs(slideIndex += n);
}

// Chuyển đến slide cụ thể
function currentSlide(n) {
    showDivs(slideIndex = n);
}

// Hiển thị slide
function showDivs(n) {
    let i;
    let slides = document.getElementsByClassName('mySlides');

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex - 1].style.display = 'block';
}

// Khởi tạo modal với ảnh đầu tiên
showDivs(slideIndex);
