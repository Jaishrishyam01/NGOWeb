// let scrollContainer = document.querySelector(".gallery");
// let backbtn = document.getElementById("backbtn");
// let nextbtn = document.getElementById("nextbtn");

// scrollContainer.addEventListener("wheel",(evt)=>{
//     evt.preventDefault();
//     scrollContainer.scrollLeft += evt.deltaY;
//     scrollContainer.style.scrollBehavior = "auto";
// });

// nextbtn.addEventListener("click", ()=>{
//     scrollContainer.style.scrollBehavior = "smooth";
//     scrollContainer.scrollLeft += 1500;
// })
// backbtn.addEventListener("click", ()=>{
//     scrollContainer.style.scrollBehavior = "smooth";
//     scrollContainer.scrollLeft -= 1500;
// })

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000);
}
// function heal(){
//     window.open("./heal.html","_self");
// }
// setTimeout(heal(),5000);