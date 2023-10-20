import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';
import QuoteDisplay from './components/QuoteDisplay';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quote" element={<QuoteDisplay />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
