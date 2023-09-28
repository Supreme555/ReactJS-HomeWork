import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import EnterComp from '../enter/EnterComp'
import HelpComp from '../help/HelpComp'
import InfoComp from '../info/InfoComp'
const Home = () => {
    const nav = useNavigate()
    return (
        <div>
            <div>
                <nav>
                    <button onClick={() => nav('/')}>Home</button>
                    <button onClick={() => nav('/help/')}>HELP</button>
                    <button onClick={() => nav('/enter/')}>ENTER</button>
                    <button onClick={() => nav('/КУДА/')}>КУДА?</button>
                </nav>
            </div>
        </div>

    )
}
export default Home