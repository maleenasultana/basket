export const initialState = {
    basket: [],
    user: null,
  };
  
  const reducer = (state, action) => {
    console.log("action", action);
    switch (action.type) {
      case "SET_USER":
        return {
          ...state,
          user: action.user,
        };
      case "ADD_TO_BASKET":
        //LOGIC to add an item to basket
  
        return {
          ...state,
          basket: [...state.basket, action.item],
        };
      case "REMOVE_FROM_BASKET":
        //LOGIC to remove an item to basket
  
        let newBasket = [...state.basket];
  
        const index = state.basket.findIndex((item) => item.id === action.id);
  
        if (index >= 0) {
          newBasket.splice(index, 1);
        }
  
        return { ...state, basket: newBasket };
      default:
        return state;
    }
  };
  export default reducer;