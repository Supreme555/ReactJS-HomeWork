import {useState } from 'react'

import { students as studentsData } from './students.data'
import PakazComp from '../pokaz/PokazComp'
import { useNavigate } from 'react-router-dom'


function Home() {
  const [students, studentsState] = useState(studentsData)
  return (
    <div>
      <h1>Students</h1>
      <div>
        {students.length ?
          students.map(student => (
            <PakazComp key={student.id} student={student} />
          ))
          : <p>There are no student</p>
        }
      </div>
    </div>
  )
}

export default Home
