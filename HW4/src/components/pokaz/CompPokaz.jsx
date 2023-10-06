import { Link, useParams, useLocation } from "react-router-dom"
import { useState, useEffect } from 'react'

const Pokaz = ({complsArr}) => {
    const location = useLocation();
    const { id } = useParams()


    // const [comple, compleState] = useState(location.state)
    // useEffect(() => {
    //     console.log(comple)
    //     complsArrState(prev => [
    //         { id: prev.length + 1, ...comple }, ...prev])
    // }, []);
    console.log(location.state)
    console.log(complsArr)
    return (
        <div>
            <Link to='/'>Back</Link>
            {
                complsArr.map(compl => (
                    <div key={compl.id} className={compl.block}>
                        <div>{compl.id}</div>
                        <h1>{compl.name}</h1>
                    </div>
                ))
            }
        </div>
    )
}
export default Pokaz