import styles from './zapis.module.css'
const Viev = ({ zapis }) => {


    // const vievZapis = (e) => {
    //     e.preventDefault()
    //     console.log(1)
    //     return (
    //         <div>
    //             <div>
    //                 {console.log(2)}
    //             </div>
    //             <div>

    //             </div >
    //         </div>
    //     )
    // }
    return (
        <div className={styles.zapis}>
            {/* <button onClick={e => vievZapis(e)}>Viev</button> */}
            {
                <div key={zapis.id} >
                    <h2> {zapis.zagolov}</h2>
                    <div>
                        <p>{zapis.text}</p>
                        <p>{zapis.date}</p>
                    </div>
                </div>
            }
        </div>
    )

}
export default Viev