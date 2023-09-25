import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../home/Home'
import InfoComp from '../info/InfoComp'
import {useState } from 'react'
import { students as studentsData } from '../home/students.data'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path='/' />
                <Route element={<InfoComp students={studentsData}/>} path='/student/:id' />
                <Route path='*' element={<div>Not found</div>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router