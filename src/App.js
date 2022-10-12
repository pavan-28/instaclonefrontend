import React from 'react';
import Postview from './Postview';
import Landing from './Landing';
import Form from './Form';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function App(){
  return (
    <BrowserRouter>
      <Routes>
         <Route path='/' element={<Landing />} /> 
         <Route path='/postview' element={<Postview />} />
         <Route path='/form' element={<Form />}/>
      </Routes>
    </BrowserRouter>
  );
}









