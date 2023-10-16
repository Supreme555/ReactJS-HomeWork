import { useState } from 'react'
import styles from './CreateCarForm.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { addCar } from './additemsSlice'

const clearData = {
    price: '',
    name: '',
    image: ''
}

const CreateCarForm = () => {
    const [data, setData] = useState(clearData)
    const cars = useSelector((state) => state.addCar)
    const dispatch = useDispatch()

    const createCar = (e) => {
        e.preventDefault()
        // console.log(cars)
        dispatch(addCar(data))
        setData(clearData)
    }


    return (
        <form className={styles.form}>
            <input type="text" placeholder='Name'
                onChange={e => setData(prev => ({ ...prev, name: e.target.value }))}
                value={data.name} />
            <input type="text" placeholder='Price'
                onChange={e => setData(prev => ({ ...prev, price: e.target.value }))}
                value={data.price} />
            <input type="text" placeholder='Image'
                onChange={e => setData(prev => ({ ...prev, image: e.target.value }))}
                value={data.image} />

            <button onClick={e => createCar(e)}>Create</button>
        </form>
    )
}

export default CreateCarForm