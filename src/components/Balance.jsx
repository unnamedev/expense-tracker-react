import React, {useContext} from "react"
import {GlobalContext} from "../context/GlobalState"
import {getAmounts, getTotalAmounts} from "../helpers/helpers"

const Balance = () => {
    const {transactions} = useContext(GlobalContext)
    const amounts = getAmounts(transactions)

    return <div>
        <h4>Your balancer</h4>
        <h2 id="balance">${getTotalAmounts(amounts)}</h2>
    </div>
}

export default Balance
