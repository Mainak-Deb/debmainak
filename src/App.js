import './App.css';
import { BrowserRouter,Routes, Route} from "react-router-dom";
import Landing from './components/Landing';
import Codefont from './components/Codefont';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/fun" element={<Codefont />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
