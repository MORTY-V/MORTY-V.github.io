const red = Math.random() * 255;
const green = Math.random() * 255;
const blue = Math.random() * 255;

const header1 = document.getElementById('h1');
header1.style.color = `rgb(${red}, ${green}, ${blue})`;

const liFirst = document.getElementById('li1');
liFirst.textContent = "Flaburgasted";

const button1 = document.getElementById('li1');
button1.addEventListener('click', () => {
    window.location.href = 'https://www.youtube.com/watch?v=EIyixC9NsLI&list=RDEIyixC9NsLI&start_radio=1';
});

button1.addEventListener('mouseover', () => {
    liFirst.style.color = 'green';
})

button1.addEventListener('mouseout', () => {
    liFirst.style.color = '';
})