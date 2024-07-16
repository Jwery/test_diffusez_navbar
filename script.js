document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const bot = document.querySelector('.bot');

    menuIcon.addEventListener('click', function() {
        bot.classList.toggle('active');
        menuIcon.classList.toggle('change');
    });
});