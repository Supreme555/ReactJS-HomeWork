import React, { useState } from 'react';
const mouseText = [
    { isEdit: false, text: 'Тише, мыши, кот на крыше', name: '1' },
    { isEdit: false, text: 'А котята ещё выше', name: '2' },
    { isEdit: false, text: 'Кот пошёл за молоком', name: '3' },
    { isEdit: false, text: 'А котята кувырком', name: '4' }
];
const clearData = {
    text: '',
    name: '',
}
const Login = () => {
    const [objArr, setObjArr] = useState(mouseText);
    const [data, setData] = useState(clearData)

    function editSave(index, e) {
        // сохранение изменений (при изменении текста в input)
        let copy = Object.assign([], objArr);

        copy[index].text = data.text;
        copy[index].name = data.name;
        console.log(data)
        console.log(copy)
        copy[index].isEdit = false;
        setObjArr(copy);
    }
    function editStart(index, obj_name, obj_text) {
        // начало редактирования (клик по строке)
        let copy = Object.assign([], objArr);
        copy[index].isEdit = true;
        setData(prev => ({ ...prev, text: obj_name }))
        setData(prev => ({ ...prev, name: obj_text }))
        console.log(data)
    }

    const result = objArr.map((obj, index) => {
        let element;
        if (obj.isEdit) {
            element = <div>
                <input placeholder={obj.text}
                    onChange={(e) => { setData(prev => ({ ...prev, text: e.target.value })) }} />;
                <input placeholder={obj.name}
                    onChange={(e) => { setData(prev => ({ ...prev, name: e.target.value })) }} />
                <button onClick={() => { editSave(index, event) }}>Ready</button>
            </div>
        }
        else {
            element = <div>
                <span>{obj.text}</span>;
                <br /><br />
                <span>{obj.name}</span>
                <br />
                <button onClick={(e) => { editStart(index, obj.text, obj.name) }}>start</button>
            </div>;
        }

        return <li key={index}>{element}</li>;
    });

    return (
        <ul>
            {result}
        </ul>
    )
}
export default Login