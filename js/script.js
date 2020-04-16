//Define Variables, Array
const button = document.querySelector("button");
const body = document.querySelector("body");
const colors = ['#F0FFFF', '#00BFFF', '#CD5C5C', '#F08080', '#E0FFFF', '#B0C4DE'];

//Listen for the click, what does it do?
body.style.backgroundColor = '#FFFAF0';
button.addEventListener('click', () => {body.style.backgroundColor = colors[Math.floor((Math.random() * colors.length))]})




