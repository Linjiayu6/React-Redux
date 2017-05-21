/*
function generateText () {
  var element = document.createElement('h2');
  element.innerHTML = "Hello h2 world";
  return element;
}

module.exports = generateText;
*/

const generateText = () => {
  const element = document.createElement('h2');
  element.innerHTML = 'Hello h2 world';
  return element;
};

export default generateText;
