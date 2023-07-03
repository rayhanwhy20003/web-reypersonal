
const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function () {
    nav.classList.toggle('slide');
});

/*===============typed========*/
const typed = new Typed('#multiple-text', {
    strings: ['Rayhan wahyu nugroho', 'player epep', 'Mahasiswa Raharja'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop: true
});