import React from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { useState } from "react";
import styles from "./UserProfile.module.css";
const UserProfile = ({ users, books, setBooks }) => {
  const [filter, setFilter] = useState(books);
  const { id } = useParams();
  const location = useLocation();

  const editStart = (index) => {
    let copy = Object.assign([], location.state[1]);
    copy[index].isEdit = true;
    copy[index].status = "Недоступно";
    copy[index].user = location.state[0].email;
    setBooks(copy);
    console.log(books);
    setFilter = books.filter((book) => book.email === location.state[0].email);
  };
  return (
    <div className={styles.form}>
      <div>
        {console.log(location.state)}
        <Link to="/Login">Back</Link>
        <div>{id}</div>
        {console.log(id)}
        <p>{location.state[0].name}</p>
        <p>{location.state[0].surname}</p>
        <p>{location.state[0].email}</p>
        <p>{location.state[0].password}</p>
        {books.map((book, index) => (
          <div key={book.id}>
            <p>{book.id}</p>
            <p>{book.name}</p>
            <p>{book.status}</p>
          </div>
        ))}
      </div>

      <div>
        {location.state[1].map((book, index) => (
          <div key={book.id}>
            <p>{book.id}</p>
            <p>{book.name}</p>
            <p>{book.status}</p>
            <button
              onClick={() => {
                editStart(index);
              }}
            >
              Click
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserProfile;
