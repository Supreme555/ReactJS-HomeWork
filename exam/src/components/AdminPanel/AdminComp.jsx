import { useState } from 'react'
const clearData = {
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
    return (
        <div>
            <form>
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
                {knigi.length ?
                    knigi.map(kniga => (
                        <div key={kniga.id} >
                            <p>{kniga.id}</p>
                            <h2> {kniga.name}</h2>
                            <div>
                                <p>{kniga.avtor}</p>
                                <p>{kniga.date}</p>
                                <p>{kniga.status}</p>
                                <button onClick={() => { Check(kniga.id) }}
                                >Delete</button>
                            </div>
                        </div>
                    ))
                    : <p>There are no books</p>}

            </div>
        </div>
    )
}
export default Admin
