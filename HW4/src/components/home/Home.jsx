import { useState, useEffect } from 'react'
import { compls as complData } from './computer.data'
import { useNavigate } from 'react-router-dom';
const Home = ({ complsArrState }) => {
  const nav = useNavigate()
  const [compls, complState] = useState(complData)
  const handleClick = (compl) => {
    complsArrState(prev => [
      { id: prev.length + 1, ...compl }, ...prev])
    nav(`/viev/`, { state: compl });
  };
  return (
    <div>
      {
        compls.map(compl => (
          <div key={compl.id} className={compl.block}>
            <div>{compl.id}</div>
            <h1>{compl.name}</h1>
            <button onClick={() => { handleClick(compl) }}>Добавить</button>
          </div>
        ))
      }
    </div>
  )
}

export default Home
