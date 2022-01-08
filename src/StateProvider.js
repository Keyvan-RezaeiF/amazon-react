import React, { createContext, useContext, useReducer} from "react";

// preparing the data layer
export const StateContext = createContext();

// Wraping our app and providing the data layer
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// pulling information from the data layer
export const useStateValue = () => useContext(StateContext);