import React from 'react';
import styled from 'styled-components';
import { GoArrowDown, GoArrowUp } from 'react-icons/go';

const StatsBox = ({ val1, val2 }) => {

    return (
        <Box>
            <StatBox>{val1} {val1 > val2 ? <GoArrowUp style={{ color: '#2ecc71' }} /> : <GoArrowDown style={{ color: '#e74c3c' }} />}</StatBox>
            <StatBox>{val2} {val2 > val1 ? <GoArrowUp style={{ color: '#2ecc71' }} /> : <GoArrowDown style={{ color: '#e74c3c' }} />}</StatBox>
        </Box>
    )
};

export default StatsBox;

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