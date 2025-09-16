//import '/style.css';

const fetchBearButton = document.getElementById('fetchBearButton');
const bearTarget = document.getElementById('bearTarget');
const img = document.getElementById('bearImage');

fetchBearButton.addEventListener('click', () => {

  const width = Math.floor(Math.random() * 200) + 200;
  const height = Math.floor(Math.random() * 200) + 200;
  
  img.src = `https://placebear.com/${width}/${height}`;
  img.alt = 'bear';
  img.style.maxWidth = '100%';
  
  bearTarget.innerHTML = '';
  bearTarget.appendChild(img);
});