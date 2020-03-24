import React from 'react';
import styled from 'styled-components';

const DeathStats = ({ val1, val2 }) => {

    return (
        <Box>
            <StatBox>{val1}</StatBox>
            <StatBox>{val2}</StatBox>
        </Box>
    )
};

export default DeathStats;

const Box = styled.div`
width: 100%;
display: flex;
border: 0.2rem solid #5d737e;
`;

const StatBox = styled.div`
color: white;
width: 50%;
text-align: center;
padding: 0.5rem;

&:nth-child(1){
    border-right: 0.2rem solid #5d737e;
}
`;