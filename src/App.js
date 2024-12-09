import './App.css';
import Introduction from './Component/JS/Introduction';
import Navbar from './Component/JS/Navbar';
import Project from './Component/JS/Project';
import Skills from './Component/JS/Skills';
import ContactUs from './Component/JS/Contact';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Introduction></Introduction>
      <Skills></Skills>
      <Project></Project>
      <ContactUs></ContactUs>
    </div>
  );
}

export default App;
