import PropTypes from "prop-types";
import { TransactionHead, TransactionTable, TransactionTableBody, TransactionTableRow, TransactionHeadLine, TransactionTableData } from './TransactionHistory.styled';

export { TransactionHistory };
    
function TransactionHistoryHead() {
    return (
        <TransactionHead>
            <tr>
                <TransactionHeadLine>Type</TransactionHeadLine>
                <TransactionHeadLine>Amount</TransactionHeadLine>
                <TransactionHeadLine>Currency</TransactionHeadLine>
            </tr>
        </TransactionHead>
    )
}

function TransactionHistoryLine({type, amount, currency}) {
    return (
        <TransactionTableRow>
            <TransactionTableData>{type}</TransactionTableData>
            <TransactionTableData>{amount}</TransactionTableData>
            <TransactionTableData>{currency}</TransactionTableData>
        </TransactionTableRow>
    );
}

function TransactionHistory({items}) {
    return (
        <TransactionTable>
                <TransactionHistoryHead />
            <TransactionTableBody>
                {items.map(({id, type, amount, currency}) => (
                    <TransactionHistoryLine
                        key={id}
                        type={type}
                        amount={amount}
                        currency={currency}
                    />
                ))}
            </TransactionTableBody>
        </TransactionTable>
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