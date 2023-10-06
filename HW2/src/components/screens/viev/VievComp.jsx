import Delete from '../delete/DeleteComp';
import styles from './zapis.module.css'
import { useState, useEffect } from 'react'

const Viev = ({ zapis, setZapis }) => {
    const [id, setList] = useState();
    // console.log(zapis)
    // const Delete = (id) => {
    //     console.log(id)
    //     setZapis(zapis.filter(obj => obj.id != id));
    //     console.log(zapis)
    // }
    useEffect(() => {
        console.log(id)
        setZapis(zapis.filter(obj => obj.id != id));
        console.log(zapis)
    });
    return (
        <div className={styles.zapis}>
            <div key={zapis.id} >
                <p>{zapis.id}</p>
                <h2> {zapis.zagolov}</h2>
                <div>
                    <p>{zapis.text}</p>
                    <p>{zapis.date}</p>
                </div>
            </div>
            <button onClick={() => setList(zapis.id)}>Delete</button>
        </div>
    )
}
export default Viev