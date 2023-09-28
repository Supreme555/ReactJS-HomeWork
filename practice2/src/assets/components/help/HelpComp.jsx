import HomeComp from '../home/Home'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Help.module.css'
import InfoComp from '../info/InfoComp'
const stat = [
    {
        id: 1,
        zagol: 'Dopystim 1',
        date: '12.07.2022',
        text: 'Text 1'
    },
    {
        id: 2,
        zagol: 'Dopystim 2',
        date: '12.07.2022',
        text: 'Text 2'
    },
    {
        id: 3,
        zagol: 'Dopystim 3',
        date: '12.07.2022',
        text: 'Text 3'
    },
    {
        id: 4,
        zagol: 'Dopystim 4',
        date: '12.07.2022',
        text: 'Text 4'
    },
]
const Help = () => {
    const [statia, setStat] = useState(stat)
    const nav = useNavigate()
    return (
        <div>
            <HomeComp />
            {
                statia.map(stati => (
                    <div key={stati.id} className={styles.block}>
                        <div>{stati.id}</div>
                        <h1>{stati.zagol}</h1>
                        <p>{stati.date}</p>
                        <p>{stati.text}</p>
                        <button onClick={() => nav(`/stati/${stati.id}`, { state: stati })}>Check</button>
                    </div>
                ))
            }
        </div>
    )
}
export default Help