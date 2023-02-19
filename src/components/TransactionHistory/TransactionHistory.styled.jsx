import styled from 'styled-components';

export const TransactionHead = styled.thead`
    background-color: #33bbff;
`;

export const TransactionHeadLine = styled.th`
    padding: 10px;

    font-size: 15px;

    color: white;

    text-shadow: 1px 1px 0px black,
             0px 14px 10px rgba(0,0,0,0.15),
             0px 34px 30px rgba(0,0,0,0.1);
`;

export const TransactionTable = styled.table`
    width: 750px;
    border-radius: 5px;
    box-shadow: 5px 5px 5px grey;
`;

export const TransactionTableBody = styled.tbody`
    background-color: #fff;
    text-align: center;
`;

export const TransactionTableRow = styled.tr`
    
    background-color: #fff;

    &:nth-child(2n){
        background-color: #eef0f1;
    }
`;

export const TransactionTableData = styled.td`
    padding: 10px;

    font-size: 15px;
    font-weight: 500;

    color: black;
`