import React, {useContext} from "react"
import {formatAmountValue} from "../helpers/helpers"
import {GlobalContext} from "../context/GlobalState"

const Transaction = ({transaction}) => {
    const {deleteTransaction} = useContext(GlobalContext)

    return <li className={formatAmountValue(transaction.amount).classname}>
        {transaction.text}
        <span>{formatAmountValue(transaction.amount).value}</span>
        <button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}>X</button>
    </li>
}

export default Transaction
