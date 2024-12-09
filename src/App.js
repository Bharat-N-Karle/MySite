import './App.css';
import Introduction from './Component/Introduction';
import Navbar from './Component/Navbar';
import Project from './Component/Project';
import Skills from './Component/Skills';
import ContactUs from './Component/Contact';
import Footer from './Component/Footer';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Introduction></Introduction>
      <Skills></Skills>
      <Project></Project>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </div>
  );
}

export default App;
