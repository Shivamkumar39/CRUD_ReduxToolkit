import React from 'react'
import { BrowserRouter , Route, Routes, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Read from './components/Read';
import Create from './components/Create';
import Viewdata from './components/viewdata';
import Edit from './components/edit'

const App = () => {
  return (
   <>
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Read/>}/>
    <Route path='/create' element={<Create/>}/>
    <Route path='/view' element={<Viewdata/>}/>
    <Route path='/edit/:id' element={<Edit/>}/>
   </Routes>
   </BrowserRouter>
   </>
  )
}

export default App