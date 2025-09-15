import 'style.css';

fetch('https://placebear.com/200/300')
  .then(response => response.json())
  .then(json => console.log(json));

const baseUrl = 'https://placebear.com/200/300';
