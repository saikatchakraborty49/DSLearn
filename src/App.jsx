import './App.css';
import { Routes, Route} from "react-router-dom";
import Stack from './Components/Stack';
import Array from './Components/Array';
import LinkedList from './Components/LinkedList';
import MainMenu from './Components/MainMenu';
import Queue from './Components/Queue';
import Navbar from './Components/Navbar';
import logo from './assets/logo.png'
// import bg from './assets/bg.jpg'

function App() {
  return (
    <div className="App w-screen h-screen bg-[url('./assets/bg.jpg')] bg-cover">
      <img src={logo} className='w-[100px] fixed'/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Array/>}/>
        <Route path="/stack" element={<Stack/>}/>
        <Route path="/array" element={<Array/>}/>
        <Route path="/linked-list" element={<LinkedList/>}/>
        <Route path="/queue" element={<Queue/>}/>
      </Routes>
    </div>
  );
}

export default App;
