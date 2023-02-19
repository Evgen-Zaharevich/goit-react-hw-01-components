import styled from 'styled-components';

export const Section = styled.section`
    width: 350px;
    height: 150px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    border-radius: 20px;

    background-color: #fff;

    box-shadow: 5px 5px 5px grey;
`;

export const SectionTitle = styled.h2`
    color: grey;
    margin-top: 30px;
    
`;

export const StatisticList = styled.ul`
    display: flex;
    
    border-top: 1px solid grey;
`

export const StatisticListItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 70px;

    padding: 10px 0px;

    &:last-child {
    border-bottom-right-radius: 20px;
    }

    &:first-child {
        border-bottom-left-radius: 20px;
    }
`;

export const Label = styled.span`
    font-weight: 500;
`;

export const Percentage = styled.span`
    font-weight: 700;
`