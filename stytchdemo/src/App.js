import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// something seems to be wrong with how react-router-dom is running
import Auth from './pages/Auth';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Auth" element={<Auth/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
