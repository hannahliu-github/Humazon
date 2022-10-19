export const initialState = {
    basket: [],
    user: null
  };
  
  // Selector
  export const getBasketTotal = (basket) => 
    basket?.reduce((amount, item) => item.price + amount, 0);
    
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

      case "REMOVE_FROM_BASKET":  
        let newBasket = [...state.basket];
        const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
        );
        if (index >= 0) {
        newBasket.splice(index, 1);
        }
      
        return { 
          ...state, 
          basket: newBasket 
        };
      

      default:
        return state;
    }
  };
  
  export default reducer;