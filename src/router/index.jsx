import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Welcome from '../pages/Welcome';
import Explore from '../pages/Explore';
import Create from '../pages/campaign/Create';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Welcome />} />
                <Route path='/explore' element={<Explore />} />
                <Route path='/campaign/create' element={<Create />} />
            </Routes>
        </BrowserRouter>
    )
}