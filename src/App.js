import { useState } from 'react';
import Header from './components/Header';
import CoreConcepts from './components/CoreConcepts';
import { CORE_CONCEPTS } from './data';
import { EXAMPLES } from './data';
import TabButton from './components/TabButton';

function App() {
  const [selectedConcept, setSelectedConcept] = useState(
    'components'
  );

  function handleClick(selectedButton) {
    setSelectedConcept(selectedButton);
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Main Concepts</h2>
          <ul>
            <CoreConcepts {...CORE_CONCEPTS[0]} />
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedConcept === 'components'} onClick={() => handleClick('components')}>
              Components
            </TabButton>
            <TabButton isSelected={selectedConcept === 'jsx'} onClick={() => handleClick('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedConcept === 'props'} onClick={() => handleClick('props')}>Props</TabButton>
            <TabButton isSelected={selectedConcept === 'state'} onClick={() => handleClick('state')}>State</TabButton>
          </menu>
          <div id="tab-content">
            <h3>{EXAMPLES[selectedConcept].title}</h3>
            <p>{EXAMPLES[selectedConcept].description}</p>
            <pre>
              <code>{EXAMPLES[selectedConcept].code}</code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
