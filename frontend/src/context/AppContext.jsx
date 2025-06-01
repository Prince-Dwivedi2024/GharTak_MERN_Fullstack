import { createContext } from "react";
import { workers } from "../assets/assets";

export const AppContext = createContext()

const currencySymbol = "$"

const AppContextProvider = (props) =>{
      const value = {
        workers, currencySymbol
      }

      return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
      )
}

 export default AppContextProvider