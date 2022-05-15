import '../styles/globals.css'
import {createContext, useReducer} from "react";

export const ACTION_TYPE = {
  SET_LAT_LONG: 'SET_LAT_LONG',
  SET_COFFEE_STORES: 'SET_COFFEE_STORES'
}

const storeReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPE.SET_LAT_LONG: {
      return {...state, latLong: action.payload.latLong};
    }
    case ACTION_TYPE.SET_COFFEE_STORES: {
      return {...state, coffeeStores: action.payload.latLong};
    }
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}

export const StoreContext = createContext();
const StoreProvider = ({children}) => {
  const initialState = {
    latLong: "",
    coffeeStores: [],
  }
  const [state, dispatch] = useReducer(storeReducer, initialState);

  return <StoreContext.Provider value={{ state, dispatch }} >
      {children}
    </StoreContext.Provider>
}

function MyApp({ Component, pageProps }) {
  return <StoreProvider>
    <Component {...pageProps} />
  </StoreProvider>


}

export default MyApp
