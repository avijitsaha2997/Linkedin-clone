
import './App.css';
import Login from './components/Login';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Header from './components/Header';

function App() {
  return (
    <div className="App">


      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={
          <div>
            <Header />
            <Home />
          </div>
        } />
      </Routes>

    </div>
  );
}

export default App;
