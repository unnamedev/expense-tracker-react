/**
 *
 * @param transactions
 * @returns {(number|"some"|"all"|number|PaymentCurrencyAmount|*)[]}
 */
export const getAmounts = (transactions = []) => {
    return transactions.map(transaction => transaction.amount)
}

/**
 *
 * @param amounts
 * @returns {string}
 */
export const getTotalAmounts = (amounts = []) => {
    return amounts.reduce((acc, item) => acc + item, 0).toFixed(2)
}

/**
 *
 * @param amounts
 * @returns {string}
 */
export const getIncome = (amounts = []) => {
    return amounts
        .filter(amount => amount > 0)
        .reduce((acc, item) => acc + item, 0)
        .toFixed(2)
}

/**
 *
 * @param amounts
 * @returns {string}
 */
export const getExpense = (amounts = []) => {
    return (amounts
        .filter(amount => amount < 0)
        .reduce((acc, item) => acc += item, 0) * -1)
        .toFixed(2)
}


/**
 *
 * @param item
 * @returns {{classname: (string), value: string}}
 */
export const formatAmountValue = (item = []) => {
    return {
        value: `${item > 0 ? "+" : "-"}$${Math.abs(item)}`,
        classname: item > 0 ? "plus" : "minus"
    }
}

