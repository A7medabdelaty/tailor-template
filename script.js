var preloader = document.getElementsByClassName("preloader")[0];
var header = document.getElementsByClassName("header")[0];

var offers = document.getElementsByClassName("offers__item");
var services = document.getElementsByClassName("services-item");

var heroContent = document.getElementsByClassName("hero__content")[0];

window.onload = function () {
  setTimeout(function () {
    preloader.style.transition = "opacity 300ms";
    preloader.style.opacity = 0;

    setTimeout(function () {
      preloader.style.display = "none";
    }, 400);
  }, 1000);

  setTimeout(function () {
    for (var i = 1; i < heroContent.children.length; i++) {
      heroContent.children[i].style.animation = "fadeToRight 1.5s forwards";
    }
  }, 1000);
};

window.onscroll = function () {
  if (scrollY >= 450) {
    header.classList.add("fixed-bar");
    offers[0].style.animation = "fadeInUp 1.5s forwards";
    offers[1].style.animation = "fadeInUp 1.5s .4s forwards";
    offers[2].style.animation = "fadeInUp 1.5s .8s forwards";
  } else {
    header.classList.remove("fixed-bar");
  }

  if (scrollY >= 2200) {
    console.log(services);
    services[0].style.animation = "fadeInUp 1.5s forwards";
    services[1].style.animation = "fadeInUp 1.5s .4s forwards";
    services[2].style.animation = "fadeInUp 1.5s .8s forwards";
    services[3].style.animation = "fadeInUp 1.5s 1.2s forwards";
  }
};

var quotes = document.querySelectorAll(".quote-item");

function nextQuote() {
  quotes[0].classList.toggle("active-quote");
  quotes[1].classList.toggle("next");
  quotes[1].classList.toggle("active-quote");
  quotes[0].classList.toggle("next");
}

function prevQuote() {
  quotes[0].classList.toggle("active-quote");
  quotes[1].classList.toggle("next");
  quotes[1].classList.toggle("active-quote");
  quotes[0].classList.toggle("next");
}
