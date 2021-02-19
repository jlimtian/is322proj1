var currentSlide = 0;
var play = setInterval(motionPictures, 4000);

function motionPictures() {
    var i;
    var slides = document.getElementsByClassName("active");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    currentSlide++;
    if (currentSlide > slides.length) {currentSlide = 1}
    slides[currentSlide-1].style.display = "block";
}