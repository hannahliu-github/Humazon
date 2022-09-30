export const initialState = {
    basket: [],
    user: null
  };
  
  // Selector
  const reducer = (state, action) => {
    switch (action.type) {
      
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