import axios from 'axios';

const routes = {
  randomQuotePath: () => '/api/quotes/random',
};

export default () => {
  const button = document.querySelector('button');
  const result = document.querySelector('#result');
  button.addEventListener('click', async () => {
    const response = await axios.get(routes.randomQuotePath());
    result.textContent = response.data.quote;
  });
};
