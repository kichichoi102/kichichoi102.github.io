
const connectBtn = document.querySelector(".connect");
const arrow = document.querySelector(".arrow");
const socialMediaList = document.querySelector(".social-media-list");
const preloader = document.querySelector('.loader-wrapper');

const fadeEffect = setInterval(() => {
  // if we don't set opacity 1 in CSS, then
  // it will be equaled to "" -- that's why
  // we check it, and if so, set opacity to 1
  if (!preloader.style.opacity) {
    preloader.style.opacity = 3;
  }
  if (preloader.style.opacity > 0) {
    preloader.style.opacity -= 0.1;
  } else {
    clearInterval(fadeEffect);
  }
}, 100);

window.addEventListener('load', fadeEffect);

connectBtn.addEventListener("click",()=>{
    if (!socialMediaList.classList.contains("active")){
        socialMediaList.classList.add("active");
        arrow.style.transform = "rotate(180deg)";
    }else{
        socialMediaList.classList.remove("active");
        arrow.style.transform = "rotate(0deg)";
    }
})


