import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Signin from './pages/Signin';
import SignUp from './pages/Signup';
import Profile from './pages/Profile';
import About from './pages/About';
import { Header } from './components/Header';

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/signin' element={<Signin />}></Route>
      <Route path='/signup' element={<SignUp />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/profile' element={<Profile />}></Route>

    </Routes>
    </BrowserRouter>
  )
}
