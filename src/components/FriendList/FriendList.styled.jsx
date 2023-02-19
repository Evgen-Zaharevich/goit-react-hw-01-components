import styled from 'styled-components';

export const FriendListContainer = styled.ul``;

export const FriendItem = styled.li`
    display: flex;
    justify-content: flex-start;
    align-items: center;

    width: 200px;
    height: 70px;

    background-color: #fff;

    margin-bottom: 10px;

    border-radius: 10px;
    box-shadow: 5px 5px 5px grey;
`;

export const FriendStatus = styled.span`
    width: 13px;
    height: 13px;

    border-radius: 50%;

    background-color: ${props => {
        if (!props.status) {
            return 'red';
        } else {
            return 'green';
        }
    }};
    
    margin: 0px 10px;
`;

export const FriendIMG = styled.img`
    margin-right:5px;
`;

export const FriendName = styled.p`
    font-weight: 500;
    font-size: 20px;

    text-shadow: 1px 2px 0px #b2a98f,
             0px 14px 10px rgba(0,0,0,0.15),
             0px 34px 30px rgba(0,0,0,0.1);
`