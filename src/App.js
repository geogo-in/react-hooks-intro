import './App.css';
import Accordion from  './components/Accordion'
import Search from './components/Search';

const items = [
  {
    title: "What is react?",
    content: "React is a JS library"
  },
  {
    title: "Why use react?",
    content: "Developers are loving this JS library"
  },
  {
    title: "How do you use react?",
    content: "You can start by creating components"
  }
];

function App() {
  return (
    <div className="App">
      <h1>React Hooks</h1>
      {/* <Accordion items={items} /> */}
      <Search />
    </div>
  );
}

export default App;
