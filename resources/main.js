const extendMenu = document.getElementById('extendMenu');
const mobileMenu = document.getElementById('mobileMenu');
const closeButton = document.getElementById('closeButton');

mobileMenu.addEventListener('click', function() {
    extendMenu.classList.remove('hidden');
});

closeButton.addEventListener('click', function() {
    extendMenu.classList.add('hidden');
});
