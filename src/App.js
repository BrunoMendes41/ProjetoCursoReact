import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Components/Home'
import Login from './Components/Login/Login';
import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login/*" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;