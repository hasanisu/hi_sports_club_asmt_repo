import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="App">
      <Home></Home>
    </div>
  );
}

export default App;
