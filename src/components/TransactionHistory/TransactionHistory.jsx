import PropTypes from "prop-types";
export { TransactionHistory };
    
function TransactionHistoryHead() {
    return (
        <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
        </tr>
    )
}

function TransactionHistoryLine({id, type, amount, currency}) {
    return (
        <tr>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
        </tr>
    );
}

function TransactionHistory({items}) {
    return (
        <table className="transaction-history">
            <thead>
                <TransactionHistoryHead />
            </thead>
            <tbody>
                {items.map(({id, type, amount, currency}) => (
                    <TransactionHistoryLine
                        key={id}
                        type={type}
                        amount={amount}
                        currency={currency}
                    />
                ))}
            </tbody>
        </table>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        }),
    )
}