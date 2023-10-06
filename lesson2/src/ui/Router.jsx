import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../components/home/Home'
import About from '../components/about/CompAbout'
import { useState } from 'react'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home/>} path='/' />
                <Route element={<About/>} path='/about/' />
                <Route path='*' element={<div>Not found</div>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router