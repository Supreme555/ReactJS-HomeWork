import { createStore } from "redux";
import rootReducer from "./reducer";
// const InitialState = {
//   currentUser: "",
//   user: [
//     {
//       id: 1,
//       name: "admin",
//       surname: "admin",
//       email: "admin@example.com",
//       password: "admin",
//     },
//     {
//       id: 2,
//       name: "admin2",
//       surname: "admin2",
//       email: "admin2@example.com",
//       password: "admin2",
//     },
//   ],
//   books: [
//     {
//       id: 1,
//       isEdit: false,
//       name: "Сад",
//       avtor: "Лермонтов",
//       date: "20.07.2009",
//       status: "нет",
//       user: "admin@example.com",
//     },
//     {
//       id: 2,
//       isEdit: false,
//       name: "Пихта",
//       avtor: "Пушкин",
//       date: "17.02.2012",
//       status: "нет",
//       user: "admin2@example.com",
//     },
//     {
//       id: 3,
//       isEdit: false,
//       name: "Город",
//       avtor: "Толстов",
//       date: "01.10.2015",
//       status: "нет",
//     },
//   ],
// };
// const reducer = (state = InitialState, action) => {
//   console.log("Do switcha acttion payload ==", action.payload);
//   console.log("Do switcha acttion type ==", action.type);

//   switch (action.type) {
//     case "REGISTRATION_USER":
//       console.log("Posle switcha acttion payload ==", action.payload);
//       return {
//         ...state,
//         user: [
//           ...state.user,
//           {
//             // id: length + 1,
//             name: action.payload.firstName,
//             surname: action.payload.lastName,
//             email: action.payload.email,
//             password: action.payload.password,
//           },
//         ],

//         currentUser: action.payload,
//       };
//     case "LOGIN_USER":
//       console.log("LOgin user acton ==", action.type);
//       return {
//         ...state,
//         currentUser: action.payload,
//       };
//     case "LOGOUT_USER":
//       return {
//         ...state,
//         currentUser: null,
//       };
//     case "RETURN_BOOK":
//       return {
//         ...state,
//         books: state.books.map((book) =>
//           book.id === action.payload ? { ...book, status: "доступна" } : book
//         ),
//       };
//     case "TAKE_BOOK":
//       return {
//         ...state,
//         books: state.books.map((book) =>
//           book.id === action.payload ? { ...book, status: "выдана" } : book
//         ),
//       };
//     default:
//       return state;
//   }
// };

const store = createStore(rootReducer);

export default store;
