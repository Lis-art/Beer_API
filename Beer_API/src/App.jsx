import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from "./pages/Homepage";
import Uebersicht from "./pages/Uebersicht";
import Detailpage from "./pages/Detailpage";
import Randombeer from "./pages/Randombeer";

function App() {
  
  return (
    <>
    <BrowserRouter> 
      <Routes> 
        <Route path="/" element={<Homepage />}/>
        <Route path="/uebersicht" element={<Uebersicht />}/>
        <Route path="/detailpage/:beerId" element={<Detailpage />}/>
        <Route path="/randombeer" element={<Randombeer />}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}
export default App
