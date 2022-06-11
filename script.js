"use strict";
const topHeader = document.querySelector(".header__top");
const nav = document.querySelector(".navbar");
const facebookLink = document.querySelector(".bi-facebook");
const youtubeLink = document.querySelector(".bi-youtube");
const instagramLink = document.querySelector(".bi-instagram");
const dots = document.querySelector(".menu");
const dot1 = document.querySelector("#dot-1");
const dot2 = document.querySelector("#dot-2");
const dot3 = document.querySelector("#dot-3");
const dot4 = document.querySelector("#dot-4");
const dot5 = document.querySelector("#dot-5");
const btnModal = document.querySelectorAll(".btn.play");

const body = document.body;

scroll = window.scrollY;

function addClass() {
  topHeader.classList.add("alt");
  nav.classList.add("alt");
  facebookLink.classList.add("alt");
  instagramLink.classList.add("alt");
  youtubeLink.classList.add("alt");
}
function removeClass() {
  topHeader.classList.remove("alt");
  nav.classList.remove("alt");
  facebookLink.classList.remove("alt");
  instagramLink.classList.remove("alt");
  youtubeLink.classList.remove("alt");
}

function dotAddClass(principal, toRemove1, toRemove2, toRemove3, toRemove4) {
  principal.classList.add("clicked");
  toRemove2.classList.remove("clicked");
  toRemove3.classList.remove("clicked");
  toRemove4.classList.remove("clicked");
  toRemove5.classList.remove("clicked");
}

if (scroll >= 50) {
  addClass();
} else if (scroll < 50) {
  removeClass();
}

window.onscroll = (e) => {
  let scrollY = window.scrollY;
  if (scrollY >= 50) {
    addClass();
  } else if (scrollY < 50) {
    removeClass();
  }
};

dots.addEventListener("click", (e) => {
  const target = e.target.id;
  switch (target) {
    case dot1.id:
      dotAddClass(dot1, dot2, dot3, dot4, dot5);
      break;
    case dot2.id:
      dotAddClass(dot2, dot3, dot4, dot5, dot1);
      break;
    case dot3.id:
      dotAddClass(dot3, dot4, dot5, dot1, dot2);
      break;
    case dot4.id:
      dotAddClass(dot4, dot5, dot1, dot2, dot3);
      break;
    case dot5.id:
      dotAddClass(dot5, dot1, dot2, dot3, dot4);
      break;
  }
});

btnModal.forEach((btn) => {
  const overlay = document.createElement("DIV");
  const video = document.createElement("VIDEO");
  const btnClose = document.createElement("BUTTON");
  let btIcon = document.createElement("I");
  btn.addEventListener("click", () => {
    overlay.classList.add("overlay");
    overlay.classList.add("full");

    video.setAttribute("src", "Videos/review-1.mp4");
    video.setAttribute("controls", "");

    btnClose.setAttribute("type", "button");
    btnClose.classList.add("btn");
    btnClose.classList.add("view");
    btnClose.classList.add("close");
    btIcon.classList.add("bi");
    btIcon.classList.add("bi-x");

    btnClose.appendChild(btIcon);

    overlay.appendChild(video);
    overlay.appendChild(btnClose);

    body.appendChild(overlay);
    body.style.overflow = "hidden";
  });
  btnClose.addEventListener("click", () => {
    overlay.remove();
    body.style.overflow = "scroll";
  });
  overlay.addEventListener("click", () => {
    overlay.remove();
    body.style.overflow = "scroll";
  });
});

$(document).ready(function () {
  $(".carousel").slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    infinite: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          variableWidth: true,
          slidesToShow: 2,
          slidesToScroll: 2,
          swipe: true,
          swipeToSlide: true,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 980,
        settings: {
          variableWidth: true,
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
        },
      },
      {
        breakpoint: 830,
        settings: {
          variableWidth: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  });
});
