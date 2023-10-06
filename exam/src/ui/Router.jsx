import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../home/Home'
import Admin from '../components/AdminPanel/AdminComp'
import Login from '../components/LoginPanel/LoginComp'
import Register from '../components/RegisterPanel/RegisterComp'
import { knigi as knigiData } from '../home/knigi.data'
import { users as usersData } from '../home/user.data'
import { useState } from 'react'

const Router = () => {
    const [users, setUsers] = useState(usersData)
    const [knigi, setKnigi] = useState(knigiData)
    console.log(knigi)
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path='/' />
                <Route element={<Admin setKnigi={setKnigi} knigi={knigi}/>} path='/admin' />
                <Route element={<Login />} path='/login' />
                <Route element={<Register />} path='/register' />
                <Route path='*' element={<div>Not found</div>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router