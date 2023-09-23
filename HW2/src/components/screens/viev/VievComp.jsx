import styles from './zapis.module.css'
import { useState } from 'react'
const Viev = ({ zapis }, { setZapis }) => {

    function handleClick() {
        const nextShapes = zapis.map((zap) => {
            if (zapis.delete === true) {
                // No change
                return zapis;
            } else {
                // Return a new circle 50px below
                return {
                    ...zapis,
                    delete: true,
                };
            }
        });
        // Re-render with the new array
        setZapis(nextShapes);
        console.log(zapis)
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
                        <button onClick={handleClick}>Delete</button>
                        {console.log(zapis.id)}
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