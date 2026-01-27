const initialState = { isAuth: false };

export default function authReducer(state = initialState, action) {
  if (action.type === "LOGIN") return { isAuth: true };
  if (action.type === "LOGOUT") return { isAuth: false };
  return state;
}
