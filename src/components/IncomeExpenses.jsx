import React, {useContext} from "react"
import {GlobalContext} from "../context/GlobalState"
import {getAmounts, getExpense, getIncome} from "../helpers/helpers"

const IncomeExpenses = () => {
    const {transactions} = useContext(GlobalContext)
    const amounts = getAmounts(transactions)

    return <>
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">{getIncome(amounts)}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">{getExpense(amounts)}</p>
            </div>
        </div>
    </>
}

export default IncomeExpenses
