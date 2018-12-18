import 'babel-polyfill';

import './../sass/styles.scss';

const getHeader = () => {

  const element = document.createElement('h1');

  element.innerHTML = helloWebpack;

  return element;
};

document.body.appendChild(getHeader());
