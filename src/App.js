import './App.css';
import { BrowserRouter,Routes, Route} from "react-router-dom";
import Landing from './components/Landing';
import Codefont from './components/Codefont';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/fun" element={<Codefont />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/nav" element={<Navbar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
