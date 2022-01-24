import React, {useContext, useState} from "react"
import {GlobalContext} from "../context/GlobalState"
import {v4 as uuidv4} from "uuid"


const AddTransaction = () => {
    // Context
    const {addTransaction} = useContext(GlobalContext)
    // Store form fields values
    const [text, setText] = useState("")
    const [amount, setAmount] = useState(0)

    /**
     * Form submit handler
     * @param e - event
     */
    const handleSubmit = (e) => {
        e.preventDefault()
        addTransaction({id: uuidv4(), text, amount: parseInt(amount)})
        setAmount(0)
        setText('')
    }

    return <>
        <h3>Add new transaction</h3>
        <form onSubmit={handleSubmit}>
            <div className="form-control">
                <label htmlFor="text">Text</label>
                <input
                    type="text"
                    id="text"
                    placeholder="Enter text..."
                    onChange={(e) => setText(e.target.value)}
                    value={text}
                />
            </div>
            <div className="form-control">
                <label htmlFor="amount">Amount <br/>(negative - expense, positive - income)</label>
                <input
                    type="number"
                    id="amount"
                    placeholder="Enter amount..."
                    onChange={(e) => setAmount(e.target.value)}
                    value={amount}
                />
            </div>
            <button className="btn">Add transaction</button>
        </form>
    </>
}

export default AddTransaction
