
import './tsfile';
import './styles.scss';

var getHeader = () => {

  const element = document.createElement('p');

  element.innerHTML = 'hello Webpack';

  return element;
};

document.body.appendChild(getHeader());
