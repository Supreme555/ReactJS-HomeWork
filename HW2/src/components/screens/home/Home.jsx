import PublicComp from '../public/PublicComp'
import VievComp from '../viev/VievComp'
import { useState } from 'react'
import { zapis as zapisData } from './zapis.data'
const Home = () => {
    const [zapis, setZapis] = useState(zapisData)
    return (
        <div>
            <PublicComp setZapis={setZapis} />
            {/* <VievComp zapisData={zapis} /> */}
            <div>
                {zapis.length ?
                    zapis.map(zapis => (
                        <VievComp key={zapis.id} zapis={zapis} />
                    ))
                    : <p>There are no cars</p>
                }
            </div>
        </div>
    )
}
export default Home