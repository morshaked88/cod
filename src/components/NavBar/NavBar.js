import React from 'react';
import styled from 'styled-components';

const NavBar = () => {
    return (
        <Box>
            <Title>Plunder Kings</Title>
        </Box>
    )
};

export default NavBar;

const Box = styled.nav`
width: 100%;
height: 7rem;
background-color: rgba(35, 40, 59, 1);
display: flex;
align-items: center;
justify-content: center;
`;


const Title = styled.h1`
font-family: 'Chela One', cursive;
font-size: 8vw;
letter-spacing: 0.2rem;
color: white;
`;