import React from 'react';
import styled from 'styled-components';

const RankBox = ({ username, title, amount }) => {

    console.log(username)

    const avatar = `/images/users/${username}.jpg`;

    return (
        <Box>
            <ImgBox>
                <Img src={avatar} />
            </ImgBox>
            <TextBox>
                <Title>{title}</Title>
                <SubTitle>{username}</SubTitle>
            </TextBox>
            <StatsBox>
                <Text>{amount}</Text>
            </StatsBox>
        </Box>
    )
};

export default RankBox;

const Box = styled.div`
width: 100%;
height: 10rem;
border: 0.1rem solid #bdc3c7;
border-radius: 0.8rem;
background-color: rgba(35, 40, 59, 0.6);
display: flex;
`;

const ImgBox = styled.div`
flex-basis: 25%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`;

const Img = styled.img`
height: 65%;
width: 80%;
border-radius: 50%;
border: 0.2rem solid #bdc3c7;
`;

const TextBox = styled.div`
flex-basis: 50%;
display: flex;
flex-direction:column;
align-items: center;
justify-content: center;
`;

const Title = styled.h2`
text-transform: uppercase;
font-weight: bold;
color: white;
font-size: 2rem;
margin-bottom: 1rem;
`;

const SubTitle = styled.h4`
text-transform: uppercase;
color: white;
font-size: 1.6rem;
`;

const StatsBox = styled.div`
flex-basis: 25%;
height: 100%;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`;

const Text = styled.p`
color: white;
font-size: 2rem;
font-weight: bold;
`;