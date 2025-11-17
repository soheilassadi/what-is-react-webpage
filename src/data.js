import componentsImg from './assets/components.png';
import jsxImg from './assets/jsx-ui.png';
import propsImg from './assets/config.png';
import stateImg from './assets/state-mgmt.png';

export const CORE_CONCEPTS = [
  {
    image: componentsImg,
    title: 'Components',
    description:
      'Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.',
  },
  {
    image: jsxImg,
    title: 'JSX',
    description:
      'JSX, or JavaScript Syntax Extension, is an integral part of React, a popular JavaScript library for building user interfaces. JSX looks like HTML, a language used for structuring and presenting content on the web, but it has the full power of JavaScript.',
  },
  {
    image: propsImg,
    title: 'Props',
    description:
      'Props is a special keyword in React that stands for properties and is used for passing data from one component to another.',
  },
  {
    image: stateImg,
    title: 'State',
    description:
      'React components has a built-in state object. The state object is where you store property values that belong to the component. When the state object changes, the component re-renders.',
  },
];
