// Navbar selectors
const inrtoHead = document.getElementById("headlogo");
const colorHead = document.getElementById("headcolors");
const modsHead = document.getElementById("headmods");
const tomHead = document.getElementById("headdelonge");
const buyHead = document.getElementById("headbuy");
const headArr = [introHead, colorHead, modsHead, tomHead, buyHead];

//Page id selectors
const into = document.getElementById("logo");
const colors = document.getElementById("colors");
const mods = document.getElementById("mods");
const delonge = document.getElementById("delonge");
const buy = document.getElementById("buy");
const navArr = [inro, colors, mods, delonge, buy];

window.onscroll = () => {
navArr.forEach(element => {
  element.onmouseover = () => {
    colorHead.style.color = "goldenrod";
  };
})
};


colors.onmouseout = () => {
  colorHead.style.color = "white";
};
