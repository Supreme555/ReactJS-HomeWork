import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../home/Home'
import Pokaz from '../pokaz/CompPokaz'
import {complsArr as complsArrData} from '../home/compl.data'
import { useState } from 'react'

const Router = () => {
    const [complsArr, complsArrState] = useState(complsArrData)
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home complsArrState={complsArrState}/>} path='/' />
                <Route element={<Pokaz complsArr={complsArr}/>} path='/viev/' />
                <Route path='*' element={<div>Not found</div>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router