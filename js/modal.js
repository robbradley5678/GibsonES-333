const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');
const modalClose = document.getElementById('modalClose');
const modalCaption = document.getElementById('modalCaption');
const modals = document.getElementsByClassName('modal');
const modal1 = document.getElementById('modal1');
const modal2 = document.getElementById('modal2');
const modal3 = document.getElementById('modal3');
const modal4 = document.getElementById('modal4');
const es335 = document.getElementById('es335');
const tomdelonge = document.getElementById('tomdelonge');

modal.style.display = "none";

modalClose.onclick = () => {
  modal.style.display = "none";
}

function displayModal() {
  modal.style.display = "block";
  modalImage.src = event.target.src;
  modalCaption.innerHTML = event.target.alt;
}

modal1.addEventListener('click', displayModal);
modal2.addEventListener('click', displayModal);
modal3.addEventListener('click', displayModal);
modal4.addEventListener('click', displayModal);
es335.addEventListener('click', displayModal);
tomdelonge.addEventListener('click', displayModal);
