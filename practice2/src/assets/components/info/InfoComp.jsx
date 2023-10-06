import { Link, useParams, useLocation } from "react-router-dom"
import { useState } from 'react'
const Info = () => {
    const { id } = useParams()
    const location = useLocation();
    // console.log(new URLSearchParams(location.search).get("param"));
    return (
        <div>
            <Link to='/help/'>Back</Link>
            <div>{id}</div>
            {console.log(id)}
            {/* {console.log(location.state.zagol)} */}
            {/* {console.log(location.state.name)}
            {console.log(location.state.date)} */}
            {/* <h1>{location.state.name}</h1> */}
            {/* <p>{location.state.date}</p> */}
            <h1>{location.state.zagol}</h1>
            <p>{location.state.date}</p>
        </div>
    )
}
export default Info