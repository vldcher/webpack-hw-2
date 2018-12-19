
import './tsfile';

const getHeader = () => {

  const element = document.createElement('p');

  element.innerHTML = 'hello Webpack';

  return element;
};

document.body.appendChild(getHeader());
