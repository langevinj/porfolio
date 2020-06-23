document.getElementById('container');

document.querySelector('#container');

document.querySelectorAll('.second');

document.querySelector('ol > .third');

const container = document.getElementById('container');
container.innerText = "Hello!";

const footer = document.querySelector('.footer');
footer.classList.add('main');

footer.classList.remove('main');

const newLi = document.createElement('li');

newLi.innerText = "four";

const ul = document.querySelector('ul');
ul.append(newLi);

const olList = document.querySelectorAll('ol > li');
for(let li of olList){
    li.style.backgroundColor = "green";
}

const div = document.querySelector('div.footer');
div.remove();
