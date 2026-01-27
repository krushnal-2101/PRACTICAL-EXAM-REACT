const initialState = { list: [], loading: false };

export default function roomReducer(state = initialState, action) {
  switch (action.type) {
    case "ROOMS_LOADING":
      return { ...state, loading: true };
    case "ROOMS_SUCCESS":
      return { list: action.payload, loading: false };
    default:
      return state;
  }
}
