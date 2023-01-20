// Navigation Bar Responsive
const navBar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".navbar-menu-btn");
const mainBody = document.querySelector(".main-body");
menuBtn.addEventListener("click", function () {
  if (navBar.className === "navbar") {
    navBar.className = "responsive";
    mainBody.style.display = "none";
  } else if (navBar.className === "responsive") {
    navBar.className = "navbar";
    mainBody.style.display = "block";
  }
});

const navAboutList = document.querySelector(".navbar-about-list");
const navTutorialsList = document.querySelector(".navbar-tutorials-list");
const navAccomodationList = document.querySelector(".navbar-accomodation-list");
const navTestimonialsList = document.querySelector(".navbar-testimonials-list");
const navContactList = document.querySelector(".navbar-contact-list");
navAboutList.addEventListener("click", function () {
  if (navBar.className === "responsive") {
    navBar.className = "navbar";
    mainBody.style.display = "block";
  }
});
navTutorialsList.addEventListener("click", function () {
  if (navBar.className === "responsive") {
    navBar.className = "navbar";
    mainBody.style.display = "block";
  }
});
navAccomodationList.addEventListener("click", function () {
  if (navBar.className === "responsive") {
    navBar.className = "navbar";
    mainBody.style.display = "block";
  }
  // Ovak Properties
  const ovakProperties = document.querySelector(".sect3-ovak");
  ovakProperties.style.animation = "ovakDiv 1s forwards 3";
});
navTestimonialsList.addEventListener("click", function () {
  if (navBar.className === "responsive") {
    navBar.className = "navbar";
    mainBody.style.display = "block";
  }
});
navContactList.addEventListener("click", function () {
  if (navBar.className === "responsive") {
    navBar.className = "navbar";
    mainBody.style.display = "block";
  }
});

// Go-to-Top Button
const topBtn = document.querySelector(".go-top");
let bodyScrollTopPosition = document.body.scrollTop;
window.onscroll = function () {
  if (bodyScrollTopPosition > 150 || document.documentElement.scrollTop > 150) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};

// Quotes
const quotes = document.getElementsByClassName("sect1-myquotes");
let quoteIndex = 0;
showQuote();
function showQuote() {
  for (let i = 0; i < quotes.length; i++) {
    quotes[i].style.display = "none";
  }
  quoteIndex++;
  if (quoteIndex > quotes.length) {
    quoteIndex = 1;
  }
  quotes[quoteIndex - 1].style.display = "block";
  setTimeout(showQuote, 7000);
}

// Scroll Effect of the Divs
let screenPosition = window.innerHeight / 1.3;

function digitalScrolled() {
  digitalDiv = document.querySelector(".section-two");
  digitalPosition = digitalDiv.getBoundingClientRect().top;

  if (digitalPosition < screenPosition) {
    digitalDiv.classList.add("section-two-scrolled");
  } else if (digitalPosition > screenPosition) {
    digitalDiv.classList.remove("section-two-scrolled");
  }
}
function educationScrolled() {
  educationDiv = document.querySelector(".section-three");
  educationPosition = educationDiv.getBoundingClientRect().top;

  if (educationPosition < screenPosition) {
    educationDiv.classList.add("section-three-scrolled");
  } else if (educationPosition > screenPosition) {
    educationDiv.classList.remove("section-three-scrolled");
  }
}
function testimonialsScrolled() {
  testimonialsDiv = document.querySelector(".section-four");
  testimonialsPosition = testimonialsDiv.getBoundingClientRect().top;

  if (testimonialsPosition < screenPosition) {
    testimonialsDiv.classList.add("section-four-scrolled");
  } else if (testimonialsPosition > screenPosition) {
    testimonialsDiv.classList.remove("section-four-scrolled");
  }
}

window.addEventListener("scroll", digitalScrolled);
window.addEventListener("scroll", educationScrolled);
window.addEventListener("scroll", testimonialsScrolled);

// Testimony Slide
const slides = document.getElementsByClassName("mySlides");
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

// Sign Up Request
const signUpBlock = document.querySelector(".sign-up-block");
const cancelBlock = document.querySelector(".cancel-block");
const cancelBtnLeft = document.querySelector(".cancel-btn-left");
const cancelBtnRight = document.querySelector(".cancel-btn-right");
let transfromProperty = (signUpBlock.style.transform = "translateX(90%)");

cancelBlock.addEventListener("click", function () {
  if (transfromProperty === "translateX(90%)") {
    signUpBlock.style.transform = "translateX(0)";
    signUpBlock.style.transition = "all 0.3s";
    cancelBtnLeft.style.display = "none";
    cancelBtnRight.style.display = "block";
    transfromProperty = signUpBlock.style.transform = "translateX(0)";
  } else if (transfromProperty === "translateX(0)") {
    signUpBlock.style.transform = "translateX(90%)";
    signUpBlock.style.transition = "all 0.3s";
    cancelBtnLeft.style.display = "block";
    cancelBtnRight.style.display = "none";
    transfromProperty = signUpBlock.style.transform = "translateX(90%)";
  }
});
