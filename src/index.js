import './style.css';

function component() {
  const element = document.createElement('div');
  element.classList.add('hi');

  return element;
}

document.body.appendChild(component());
