
import { useNavigate } from 'react-router-dom'
const PokazComp = ({ student }) => {
    const nav = useNavigate()
    return (
        <div key={student.id} >
            <div>
                <h2>{student.fio}</h2>
                <p>{student.age}</p>
                <p>{student.yspev}</p>
                <p>{student.poseh}</p>
                <p>{student.kyrs}</p>
                <button onClick={()=> nav(`/student/${student.id}`)}>Read more</button>
            </div>
        </div>
    )
}
export default PokazComp