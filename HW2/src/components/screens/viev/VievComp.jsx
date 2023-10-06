import Delete from '../delete/DeleteComp';
import styles from './zapis.module.css'
import { useState, useEffect } from 'react'

const Viev = ({ zapis, setZapis }) => {
    const Check = (id) => {
        console.log(id)

        setZapis((current) =>
            current.filter((zapis) => zapis.id !== id)
        );
    }
    return (
        <div>
            <div className={styles.zapis}>
                <div key={zapis.id} >
                    <p>{zapis.id}</p>
                    <h2> {zapis.zagolov}</h2>
                    <div>
                        <p>{zapis.text}</p>
                        <p>{zapis.date}</p>
                        <button onClick={() => { Check(zapis.id) }}
                        >Delete</button>
                    </div>
                </div>
            </div>
            <button onClick={() => setList(zapis.id)}>Delete</button>
        </div>
    )
}
export default Viev