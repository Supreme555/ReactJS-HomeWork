import { useState } from 'react'
import styles from './CreateCarForm.module.css'

const clearData = {
    price: '',
    name: '',
    image: ''
}

const CreateCarForm = ({ setCars }) => {
    const [data, setData] = useState(clearData)

    const createCar = (e) => {
        e.preventDefault()
        // console.log({ name, price, image })
        setCars(prev => [
            { id: prev.length + 1, ...data }, ...prev])

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


// import { useState } from 'react'
// import styles from './CreateCarForm.module.css'
// const CreateCarForm = ({ setCars }) => {
//     const [name, setName] = useState('')
//     const [price, setPrice] = useState('')
//     const [image, setImage] = useState('')

//     const createCar = (e) => {
//         e.preventDefault()
//         // console.log({ name, price, image })
//         setCars(prev => [{ id: prev.length + 1, name, price, image }, ...prev])
//     }


//     return (
//         <form className={styles.form}>
//             <input type="text" placeholder='Name'
//                 onChange={e => setName(e.target.value)} value={name} />
//             <input type="text" placeholder='Price'
//                 onChange={e => setPrice(e.target.value)} value={price} />
//             <input type="text" placeholder='Image'
//                 onChange={e => setImage(e.target.value)} value={image} />

//             <button onClick={e => createCar(e)}>Create</button>
//         </form>
//     )
// }

// export default CreateCarForm