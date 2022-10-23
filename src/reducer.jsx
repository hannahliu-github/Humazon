export const initialState = {
    basket: [],
    user: null
  };
  
  // Selector
  export const getBasketTotal = (basket) => 
    basket?.reduce((amount, item) => item.price + amount, 0);
    
  export const CurrencyFormat = (value) => {
      let res = '';
      const valueStr = value.toFixed(2);
      const lenValueStr = valueStr.length;
      let decimalStr = valueStr.slice(lenValueStr - 2, lenValueStr);
      res = '.' + decimalStr;
  
      value = Number(valueStr.slice(0, lenValueStr - 3));
      let nextDigits = value % 1000;
      res = nextDigits + res;
  
      while (value >= 1000) {
          value = Math.floor(value / 1000);
          let nextDigits = value % 1000;
          res = nextDigits + ',' + res;
      }
      res = '$' + res;
      return res;
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_TO_BASKET":
        return {
          ...state,
          basket: [...state.basket, action.item],
        };

      case 'EMPTY_BASKET':
        return {
          ...state,
          basket: []
        };

      case "SET_USER":
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