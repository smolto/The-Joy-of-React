function render(reactElement, containerDOMElement) {
  //1. Destructure the reactElement object
  const {type, props, children} = reactElement;

  //2. Create an array of entries from the props object
  const reactElementProps = Object.entries(props);

  //3. Create a new DOM element using the type property
  const newElement = document.createElement(type);

  //4. Set the attributes of the new element using the entries from the props object
  reactElementProps.forEach(([key, value], index) => {
    newElement.setAttribute(key, value);
  });

  //5. Set the innerHTML of the new element using the children property
  newElement.innerHTML = children;

  //6. Append the new element to the containerDOMElement
  containerDOMElement.appendChild(newElement);
}

const reactElement = {
  type: 'a',
  props: {
    id: 'hello',
    href: 'https://wikipedia.org/',
  },
  children: 'Read more on Wikipedia',
};

const containerDOMElement = document.querySelector('#root');

render(reactElement, containerDOMElement);
