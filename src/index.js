
import './tsfile';

const getHeader = () => {

  const element = document.createElement('p');

  element.innerHTML = 'Information from common module';

  return element;
};

document.body.appendChild(getHeader());
