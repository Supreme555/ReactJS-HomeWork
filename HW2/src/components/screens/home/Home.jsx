import PublicComp from '../public/PublicComp'
import VievComp from '../viev/VievComp'
import DeleteComp from '../delete/DeleteComp'
import { useState } from 'react'
import { zapis as zapisData } from './zapis.data'
// let active = false

const Home = () => {
    const [zapis, setZapis] = useState(zapisData);
    const [active, setActive] = useState(false);
    return (
        <div>
            <PublicComp setZapis={setZapis} />
            {/* <VievComp zapisData={zapis} /> */}
            <div style={{marginTop:20}}>
                {!active ? (
                    <button onClick={() => setActive(true)}>Viev</button>
                ) : (<button onClick={() => setActive(false)}>Close</button>)
                }
                {active ? (
                    zapis.length ?
                        zapis.map(zapis => (
                            <VievComp key={zapis.id} zapis={zapis} setZapis={setZapis}/>
                        ))
                        : <p>There are no post</p>
                ) : (<></>)}
                <DeleteComp setZapis={setZapis}/>
            </div>
        </div>
    )
}
export default Home