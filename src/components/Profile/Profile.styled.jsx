import styled from 'styled-components';


export const ProfileCard = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
align-items: center;

width: 300px;
height: 400px;

border-radius: 20px;

background-color: #fff;
box-shadow: 5px 5px 5px grey;
`;

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Avatar = styled.img`
    border-radius: 20%;

    background-color:  #eef0f1;

    margin-top: 20px;
    margin-bottom: 5px;
`;

export const Name = styled.p`
    font-size: 30px;

    margin-bottom: 5px;

    text-shadow: 1px 2px 0px #b2a98f,
             0px 14px 10px rgba(0,0,0,0.15),
             0px 34px 30px rgba(0,0,0,0.1);
`;

export const Tag = styled.p`
    color: gray;
    margin-bottom: 5px;
`;

export const icon = {
    fill: "red",
    marginRight: "3px"
}

export const Location = styled.p`
color: gray;
margin-bottom: 20px;
`;

export const Stats = styled.ul`
    display: flex;

    border-top: 1px solid grey;
    box-sizing: border-box;

    background-color: #eef0f1;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
`

export const StatsItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;

    width:99px;
    
    padding-bottom: 20px;
    padding-top: 20px;

    border-right: 1.5px solid grey;

    &:last-child {
    border-right: 0px;
  }
`;

export const Label = styled.span`
    color: grey;
`

export const Quantity = styled.span`
    font-weight: 700;
`

