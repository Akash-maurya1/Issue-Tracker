import './App.css';
import {BrowserRouter, Navigate, Route,Routes } from 'react-router-dom';
import Login from './Componenets/Login';
import Signup from './Componenets/Signup';
import Header from './Componenets/Header';
import Footer from './Componenets/Footer';
import ManageIssue from './Componenets/ManageIssue';
import AddIssue from './Componenets/AddIssue';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
        <Routes>
           <Route element={<Navigate to="/login" />} path="/"/>
           <Route element={<Login />} path="login"/>
           <Route element={<Signup />} path="signup"/>
           <Route element={<ManageIssue/>} path="manage"/>
           <Route element={<AddIssue />} path="AddIssue"/>

        </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
