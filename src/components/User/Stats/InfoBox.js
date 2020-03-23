import React from 'react';
import styled from 'styled-components';

const InfoBox = ({ name, stats }) => (
    <Box>
        <Name>{name}</Name>
        <Stats>{stats}</Stats>
    </Box>
);

export default InfoBox;

const Box = styled.div`
text-align: center;
background-color: #535c68;
padding: 1rem;
width: 11rem;
height: auto;
border-radius: 0.8rem;
`;

const Name = styled.h4`
font-size: 2rem;
font-weight: 800;
color: lightgray;
`;

const Stats = styled.p`
font-size: 2.5rem;
`;