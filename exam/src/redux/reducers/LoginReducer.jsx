const InitialState = {
  currentUser: null,
};
const LoginReducer = (state = InitialState, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      console.log("action ===", action);

      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};
export default LoginReducer;
