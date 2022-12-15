const main = document.querySelector('main');
const links = document.querySelector('.links');

main.addEventListener('click', () => {
    main.classList.toggle('open');
    links.style.opacity = '1';
})
