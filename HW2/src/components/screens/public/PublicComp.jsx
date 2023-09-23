import styles from './public.module.css'
import { useState } from 'react'

const clearData = {
    zagolov: '',
    text: '',
    date: ''
}

const Public = ({setZapis}) => {
    const [data, setData] = useState(clearData)

    const createZapis = (e) => {
        e.preventDefault()
        setZapis(prev => [
            { id: prev.length + 1, ...data }, ...prev])
            console.log(data)
        setData(clearData)
    }
    return (
        <div>
            <form action="" className={styles.item}>
                <input type="text" placeholder="Заголовок"
                    onChange={e => setData(prev => ({ ...prev, zagolov: e.target.value }))}
                    value={data.name} />
                <textarea type="text" placeholder="Основной текст"
                    onChange={e => setData(prev => ({ ...prev, text: e.target.value }))}
                    value={data.name} ></textarea>
                <input type="text" placeholder="Дата"
                    onChange={e => setData(prev => ({ ...prev, date: e.target.value }))}
                    value={data.name} />
                <button onClick={e => createZapis(e)}>Create</button>
            </form>
        </div>
    )
}
export default Public