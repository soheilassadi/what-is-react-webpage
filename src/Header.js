import reactCoreConcepts from './assets/react-core-concepts.png';

function Header() {
  const arrOfWords = ['Core', 'Basic', 'Primary', 'Initial'];
  const randomIndex = Math.floor(Math.random() * arrOfWords.length);
  const word = arrOfWords[randomIndex];

  return (
    <header>
      <img src={reactCoreConcepts} alt="React core concepts" />
      <h1>React Basics</h1>
      <p>React {word} structure and Concepts</p>
    </header>
  );
}

export default Header;
