import { useEffect, useMemo, useState } from 'react'

import { cars as carsData } from './cars.data'
import CarItem from './car-item/CarItem'
import CreateCarForm from './create-car-form/CreateCarForm'
import { useNavigate } from 'react-router-dom'

// const cars = []

function Home() {

  // const [filter, setFilter] = useState('')

  // const filteredCars = cars.filter(car => car.price < 30000)
  // const filteredCars = useMemo(() => cars.filter(car => car.price < 30000), [])
  // const filteredCars = useMemo(() => cars.filter(car => filter), [filter])


  // useMemo


  const [cars, setCars] = useState(carsData)
  // console.log(cars)

  // useEffect(() => { console.log('hey') }, []) //ПРИ ОБНОВЛЕНИЕ ДАННЫХ ВЫВОДИТ HEY

  // useEffect(() => { 
  //   const fetchData = async () => {
  //     const response = await fetch('СЕРВЕР С ДАННЫМИ')
  //     const data = await response.json() //Данные в json строку

  //     setCars(data) // Назначение
  //   }
  //   fetchData()
  // }, []) // Подгрузка данных с сервера

  const nav = useNavigate()
  return (
    <div>
      <h1>Cars catalog 1</h1>
      <button onClick={()=> nav('/car/1')}>go</button>
      <CreateCarForm setCars={setCars} />
      <div>
        {cars.length ?
          cars.map(car => (
            <CarItem key={car.id} car={car} />
          ))
          : <p>There are no cars</p>
        }
      </div>
    </div>
  )
}

export default Home
