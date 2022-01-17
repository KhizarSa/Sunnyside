"use strict";

const arr = document.querySelector(".arr-link");

arr.addEventListener("click", function (e) {
  e.preventDefault();
  const href = arr.getAttribute("href");

  if (href !== "#" && href.startsWith("#")) {
    const sectionEl = document.querySelector(href);
    sectionEl.scrollIntoView({ behavior: "smooth" });
  }
});

// Mobile Changes Implementation

// Hamburger Menu:
const hamburger = document.querySelector(".ham-icon");
const mobileMenu = document.querySelector(".menu-layout");
const navList = document.querySelector(".nav-list");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hide");
  mobileMenu.classList.toggle("menu-mobile");
});

// Implementing window resize changes for mobile:
const mainNav = document.querySelector(".main-nav");
const galImgs = document.querySelectorAll(".gal-img");
const featureImgs = document.querySelectorAll(".feature-img");

window.addEventListener(
  "resize",
  function (e) {
    e.preventDefault();
    if (this.window.innerWidth <= 720) {
      galImgs.forEach((img) => {
        img.src = img.src.replace("desktop", "mobile");
      });

      featureImgs.forEach((img) => {
        img.src = img.src.replace("desktop", "mobile");
      });

      // Implementation for hamburger menu:
      navList.classList.add("hidden");
      hamburger.classList.remove("hidden");
      mobileMenu.classList.remove("hidden");
    }

    if (this.window.innerWidth > 720) {
      galImgs.forEach((img) => {
        img.src = img.src.replace("mobile", "desktop");
      });

      featureImgs.forEach((img) => {
        img.src = img.src.replace("mobile", "desktop");
      });

      navList.classList.remove("hidden");
      hamburger.classList.add("hidden");
      mobileMenu.classList.add("hidden");
    }
  },
  true
);
