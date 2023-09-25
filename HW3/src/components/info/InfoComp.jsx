import { Link, useParams } from "react-router-dom"

const InfoComp = ({ students }) => {
    const { id } = useParams()
    const findById = (students, id) => {
        for (let student of students) {
            if (student.id == id) {
                return student;
            }
        }
    }
    const student = findById(students, id)
    return (
        <div>
            <Link to='/'>Back</Link>
            <h1>StudentDetail {id}</h1>
            <ul>
                <li>{student.fio}</li>
                <li>{student.age}</li>
                <li>{student.yspev}</li>
                <li>{student.poseh}</li>
                <li>{student.kyrs}</li>
            </ul>
        </div>

    )
}

export default InfoComp