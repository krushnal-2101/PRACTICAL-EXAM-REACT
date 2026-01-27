const initialState = { list: [] };

export default function reservationReducer(state = initialState, action) {
  switch (action.type) {
    case "RES_SUCCESS":
      return { list: action.payload };
    default:
      return state;
  }
}
