export const initialState = {
    basket: [],
    user: null
  };
  
  // Selector
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_TO_BASKET":
        console.log(state);
        console.log(action.item);
        return {
          ...state,
          basket: [...state.basket, action.item],
        };

      case "SET_USER":
        console.log(state);
        console.log(action.user);
        return {
          ...state,
          user: action.user
          }

      default:
        return state;
    }
  };
  
  export default reducer;