export default () => {
  const element = document.querySelector('progress');
  const handler = (counter = 0) => {
    if (counter <= element.getAttribute('max')) {
      element.setAttribute('value', counter);
      setTimeout(() => handler(counter + 1), 1000);
    }
  };
  handler();
};
