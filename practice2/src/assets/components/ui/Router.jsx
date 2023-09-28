import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../home/Home'
import Enter from '../enter/EnterComp'
import Help from '../help/HelpComp'
import Info from '../info/InfoComp'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path='/' />
                <Route element={<Enter />} path='/enter/' />
                <Route element={<Help />} path='/help/' />
                <Route element={<Info/>} path='/stati/:id/' />
                <Route path='*' element={<div><Home/><div>Not found</div></div>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router