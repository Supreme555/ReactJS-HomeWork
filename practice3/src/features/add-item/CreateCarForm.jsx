import { useState } from "react";
import styles from "./CreateCarForm.module.css";
import { useSelector, useDispatch } from "react-redux";
import { addCar } from "./additemsSlice";

const clearData = {
  id: 0,
  price: "",
  name: "",
  image: "",
};

const CreateCarForm = () => {
  const [data, setData] = useState(clearData);
  const cars = useSelector((state) => state.addCar.cars);
  const dispatch = useDispatch();
  const createCar = (e) => {
    e.preventDefault();
    // console.log(cars.length);
    let l = cars.length
    setData((prev) => ({ id: data.id, ...prev }));
    data.id = l + 1;
    console.log(data.id);
    dispatch(addCar(data));
    setData(clearData);
  };

  return (
    <>
      <form className={styles.form}>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) =>
            setData((prev) => ({ ...prev, name: e.target.value }))
          }
          value={data.name}
        />
        <input
          type="text"
          placeholder="Price"
          onChange={(e) =>
            setData((prev) => ({ ...prev, price: e.target.value }))
          }
          value={data.price}
        />
        <input
          type="text"
          placeholder="Image"
          onChange={(e) =>
            setData((prev) => ({ ...prev, image: e.target.value }))
          }
          value={data.image}
        />
        <button onClick={(e) => createCar(e)}>Create</button>
      </form>

      {cars.map((car) => (
        <div key={car.id} className={styles.item}>
          <div style={{
            backgroundImage: `url(${car.image})`, width: "100%", height: 400, backgroundSize: 'cover'
          }} />
          <div className={styles.info}>
            <p>{car.id}</p>
            <h2>{car.name}</h2>
            <p>
              {new Intl.NumberFormat("ru-RU", {
                style: "currency",
                currency: "USD",
              }).format(car.price)}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default CreateCarForm;
