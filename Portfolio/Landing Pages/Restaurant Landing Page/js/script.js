// Animation On Scroll
window.addEventListener("load", () => {
  AOS.init();
});

// Nav Toggler
const nav = document.querySelector(".header .nav");

const navOpener = document.querySelector(".nav-opener");
const navCloser = document.querySelector(".nav-closer");

navOpener.addEventListener("click", () => {
  nav.classList.add("opened");
});

navCloser.addEventListener("click", () => {
  nav.classList.remove("opened");
});

// Close Navigation Menu after CLicking on a Nav Item
const navClicked = () => nav.classList.remove("opened");

// Nav Bar Color
window.addEventListener("scroll", () => {
  if (this.pageYOffset > 60) {
    document.querySelector(".header").classList.add("colored");
  } else {
    document.querySelector(".header").classList.remove("colored");
  }
});

// Switch Menu Tabs
const menuTabItems = document.querySelectorAll(".menu-tab-item");

menuTabItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    // Removing Class "active"
    const toHide = document
      .querySelector(".menu-tab-item.active")
      .getAttribute("data-target");
    document.querySelector(toHide).classList.remove("active");
    document.querySelector(".menu-tab-item.active").classList.remove("active");

    // Adding Class "active"
    const toShow = e.target.getAttribute("data-target");
    document.querySelector(toShow).classList.add("active");
    e.target.classList.add("active");

    // Animation On Scroll
    AOS.init();
  });
});
