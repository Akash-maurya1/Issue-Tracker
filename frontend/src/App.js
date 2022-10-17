import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route,Routes } from 'react-router-dom';
import Login from './Componenets/Login';
import Signup from './Componenets/Signup';
import Header from './Componenets/Header';
import Footer from './Componenets/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Footer/>
        <Routes>
           {/* <Route element={<Login />} path="/"/> */}
           <Route element={<Login />} path="login"/>
           <Route element={<Signup />} path="signup"/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
