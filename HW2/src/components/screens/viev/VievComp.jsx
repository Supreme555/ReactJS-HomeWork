import styles from './zapis.module.css'
import { useState } from 'react'
const Viev = ({ zapis, setZapis }) => {
    const Check =( ) => {
        console.log(zapis.id)
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
                        <button onClick={(e) => { e.target }}
                        >Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Viev

{/* <div className={styles.zapis}>
            {active ? (
                <div key={zapis.id} >
                    <button onClick={() => setActive(false)}>Viev</button>
                    <h2> {zapis.zagolov}</h2>
                    <div>
                        <p>{zapis.text}</p>
                        <p>{zapis.date}</p>
                    </div>
                </div>
            )
                : (<button onClick={() => setActive(true)}>Viev</button>)
            }
        </div> */}