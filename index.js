

let counter = document.querySelector('#counter');

counter.innerText = +counter.innerText + 1;

setInterval(() => {
  let value = +counter.innerText + 1
  counter.innerText = value;
  counter.style.fontSize = value + 'px';
}, 1000);




const div = document.createElement('div');
div.innerHTML = '<h3>hello</h3>';


counter.appendChild




