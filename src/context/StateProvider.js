//global data layer

import { createContext, useContext, useReducer } from "react";

//to track the basket we need the setup

//data layer

export const StateContext = createContext();

//create a provider

export const StateProvider = ({ reducer, initialState, children }) => (
   
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//Thats how we use context and get the value

export const useStateValue = () => useContext(StateContext);