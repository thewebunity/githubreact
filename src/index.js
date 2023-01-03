import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './component/Navbar'
import Footer from './component/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path='/githubreact' element={<Home />} />
        </Routes>
        <Footer />
    </BrowserRouter>
);


