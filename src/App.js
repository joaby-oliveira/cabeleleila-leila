import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Landing from "./Landing";
import NotFound from "./NotFound";
import Navbar from "./Components/Navbar/Navbar";
import Signup from './Signup';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/cadastro" element={<Signup />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
