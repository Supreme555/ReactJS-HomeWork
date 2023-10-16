import { useState } from 'react'
import styles from './Admin.module.css'
const clearData = {
    name: '',
    avtor: '',
    date: '',
    status: '',
}
const clearData_1 = {
    name: '',
    avtor: '',
    date: '',
    status: '',
}
const Admin = ({ setKnigi, knigi }) => {
    const [data, setData] = useState(clearData)

    const createKniga = (e) => {
        e.preventDefault()
        setKnigi(prev => [
            ...prev, { id: prev.length + 1, ...data }])

        setData(clearData)
    }

    const Check = (id) => {
        console.log(id)
        setKnigi((current) =>
            current.filter((zapis) => zapis.id !== id)
        );
    }
    const Redact = (id) => {
        return (
            <div>
                123
            </div>
        )
    }


    const [data_1, setData_1] = useState(clearData_1)
    function editSave(index, e) {
        let copy = Object.assign([], knigi);
        copy[index].name = data_1.name;
        copy[index].avtor = data_1.avtor;
        copy[index].date = data_1.date;
        copy[index].status = data_1.status;
        console.log(data_1)
        console.log(copy)
        copy[index].isEdit = false;
        setKnigi(copy);
    }
    function editStart(index, obj_name, obj_avtor, obj_date, obj_status) {
        let copy = Object.assign([], knigi);
        copy[index].isEdit = true;
        setData_1(prev => ({ ...prev, name: obj_name }))
        setData_1(prev => ({ ...prev, avtor: obj_avtor }))
        setData_1(prev => ({ ...prev, date: obj_date }))
        setData_1(prev => ({ ...prev, status: obj_status }))
        console.log(data_1)
    }

    const result = knigi.map((obj, index) => {
        let element;
        if (obj.isEdit) {
            element =
                <div className={styles.vivod}>
                    <input placeholder='Название'
                        onChange={(e) => { setData_1(prev => ({ ...prev, name: e.target.value })) }} />
                    <input placeholder='Автор'
                        onChange={(e) => { setData_1(prev => ({ ...prev, avtor: e.target.value })) }} />
                    <input placeholder='Дата'
                        onChange={(e) => { setData_1(prev => ({ ...prev, date: e.target.value })) }} />
                    <input placeholder='Статус, да или нет'
                        onChange={(e) => { setData_1(prev => ({ ...prev, status: e.target.value })) }} />
                    <button onClick={() => { editSave(index, event) }}>Ready</button>
                </div>
        }
        else {
            element = <div>
                <div className={styles.book}>
                    <div className={styles.book_text}>
                        <h2> {obj.name}</h2>
                        <p>{obj.avtor}</p>
                        <p>{obj.date}</p>
                        <p>{obj.status}</p>
                        <button onClick={() => { editStart(index, obj.name, obj.avtor, obj.date, obj.status) }}>
                            Redact
                        </button>
                        <button onClick={() => { Check(obj.id) }}
                        >Delete</button>
                    </div>
                </div>
            </div>;
        }

        
        
    });
    return (
        <main>
            <form className={styles.form}>
                <input type="text" placeholder='Name'
                    onChange={e => setData(prev => ({ ...prev, name: e.target.value }))}
                    value={data.name} />
                <input type="text" placeholder='Avtor'
                    onChange={e => setData(prev => ({ ...prev, avtor: e.target.value }))}
                    value={data.avtor} />
                <input type="text" placeholder='Date'
                    onChange={e => setData(prev => ({ ...prev, date: e.target.value }))}
                    value={data.date} />
                <input type="text" placeholder='Status'
                    onChange={e => setData(prev => ({ ...prev, status: e.target.value }))}
                    value={data.status} />
                <button onClick={e => createKniga(e)}>Create</button>
            </form>
            <div>
                {result}
            </div>
            {/* <div >
                {knigi.length ?
                    knigi.map(kniga => (
                        <div key={kniga.id} className={styles.book}>
                            <div className={styles.book_text}>
                                <h2> {kniga.name}</h2>
                                <p>{kniga.avtor}</p>
                                <p>{kniga.date}</p>
                                <p>{kniga.status}</p>
                                <button onClick={() => { Redact }}>
                                    Redact
                                </button>
                                <button onClick={() => { Check(kniga.id) }}
                                >Delete</button>
                            </div>
                        </div>
                    ))
                    : <p>There are no books</p>}
            </div> */}
        </main>
    )
}
export default Admin
