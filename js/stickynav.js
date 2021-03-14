window.onscroll = () => {
  scrollFunction();
};

const nav = document.getElementById("nav");
const main = document.getElementsByTagName("main");
const hero = document.getElementById("hero");
const topbutton = document.getElementById("topbutton");

function scrollFunction() {
  if (window.pageYOffset > 105 && window.innerWidth > 600) {
    nav.style.position = "fixed";
    nav.style.top = "0";
  } else {
    nav.style.position = "relative";
  };

  if (window.pageYOffset > 700) {
    topbutton.style.visibility = "visible";
  } else {
    topbutton.style.visibility = "hidden";
  };

  if (window.pageYOffset > 460) {
    nav.style.boxShadow = "0 0 5px 5px white";
  } else {
    nav.style.boxShadow = "none";
  };
};
