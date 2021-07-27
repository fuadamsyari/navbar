const tombol = document.querySelector('.burger input');
const slide = document.querySelector('.item ul');

tombol.addEventListener('click', function () {
  slide.classList.toggle('slide');
});
