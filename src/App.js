import Home from './Components/Home/Home'
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Aboutme from './Components/Aboutme/Aboutme';
import Projects from './Components/Projects/Projects';
import Contactme from './Components/Contactme/Contactme';

function App() {
  return <>
    <Navbar/>
   <Home/>
   <Aboutme/>
   <Projects/>
   <Contactme/>
  </>
}

export default App;
