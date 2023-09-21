import { Link, useParams } from "react-router-dom"

const CarDetail = () => {
    const { id } = useParams()
    return (
        <div>
            <Link to='/'>Back</Link>
            <h1>CarDetail {id}</h1>
        </div>
    )
}

export default CarDetail