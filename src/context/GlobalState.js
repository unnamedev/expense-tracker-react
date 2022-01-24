import {createContext, useReducer} from "react"
import {AppReducer} from "./AppReducer"

// Initial State
const initialState = {
    transactions: [
        // {id: 1, text: "Flower", amount: -20},
        // {id: 2, text: "Salary", amount: 300},
        // {id: 3, text: "Book", amount: -55},
        // {id: 4, text: "Camera", amount: 121},
    ]
}

// Global Context
export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({children}) => {
    // Reducer
    const [state, dispatch] = useReducer(AppReducer, initialState)

    // Actions
    /**
     * Delete transaction
     * @param id - transaction id
     */
    const deleteTransaction = (id) => {
        dispatch({
            type: "DELETE",
            payload: id
        })
    }

    /**
     * Add transaction
     * @param transaction - new transaction entry
     */
    const addTransaction = (transaction) => {
        dispatch({
            type: "ADD",
            payload: transaction
        })
    }

    return (
        <GlobalContext.Provider value={{...state, deleteTransaction, addTransaction}}>
            {children}
        </GlobalContext.Provider>
    )
}