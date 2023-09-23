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
        <div>
            {/* <button onClick={e => vievZapis(e)}>Viev</button> */}
            {
                <div key={zapis.id} >
                    <div> {zapis.zagolov}</div>
                    <div>
                        <h2>{zapis.text}</h2>
                        <p>{zapis.date}</p>
                    </div>
                </div>
            }
        </div>
    )

}
export default Viev