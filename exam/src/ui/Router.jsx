import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React from "react";
import App from "../App";
import LoginForm from "../components/LoginForm/LoginForm";
import RegistartionForm from "../components/RegistrationForm/RegistrationForm";
import UserProfile from "../components/UserProfile/UserProfile";
import { useState } from "react";
import { users as usersData } from "../users.data";
import { books as booksData } from "../books.data";
import { useSelector } from "react-redux/es/hooks/useSelector";
const Router = () => {
  const [users, setUsers] = useState(usersData);
  const [books, setBooks] = useState(booksData);
  const currentUser = useSelector((state) => state.currentUser);
  console.log(currentUser);
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App />} path="/"></Route>
        <Route
          element={<RegistartionForm users={users} setUsers={setUsers} />}
          path="/Registration"
        ></Route>
        <Route
          element={
            <LoginForm users={users} books={books} setBooks={setBooks} />
          }
          path="/Login"
        >
          {currentUser ? (
            <Route
              element={<UserProfile users={users} />}
              path="/Login/User"
            ></Route>
          ) : (
            <Route
              element={<RegistartionForm />}
              path="/Login/Registration"
            ></Route>
          )}
        </Route>
        <Route
          element={
            <UserProfile users={users} books={books} setBooks={setBooks} />
          }
          path="/User/:id"
        ></Route>
        <Route element={<div>Not Found</div>} path="*"></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
