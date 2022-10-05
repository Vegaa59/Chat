import React, { FunctionComponent } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './style/navbar.css';
import Login from './pages/login'
import Signup from './pages/signup'

const App: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <nav>
        <div className="navbar">
          <Link to="/" className="navlink" ><p>Private Chat</p></Link>
        </div>
      </nav>

      <Routes>
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<Signup/>} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
