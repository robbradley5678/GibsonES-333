//Changes color of navbar depending on scroll position

// Get page section anchors
const anchors = Array.from( document.getElementsByClassName('anchor'));

// Get navbar items
const navList = Array.from( document.getElementsByClassName('navList'));

for (let i = 0; i < anchors.length; i++) {
  anchors[i].onmouseover = () => {
    navList[i].style.color = "goldenrod";
    navList[i].style.fontWeight = "bold";
  }
};

for (let i = 0; i < anchors.length; i++) {
  anchors[i].onmouseout = () => {
    navList[i].style = "";
  }
}
