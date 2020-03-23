import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IoIosArrowBack } from 'react-icons/io';


import Select from './Select';

const Compare = () => {

    return (
        <Box>
            <Button to='/'><IoIosArrowBack style={{ fontSize: '20px' }} /> BACK</Button>
            <CompareBox>
                <Select />
            </CompareBox>
        </Box>
    )
};

export default Compare;

const CompareBox = styled.div`

`;

const Box = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
`;

const Button = styled(Link)`
background-color: #535c68;
width: 8rem;
height: 3rem;
display: flex;
align-items: center;
justify-content: center;
text-decoration: none;
color: white;
margin: 1.8rem 0 0 1.8rem;
border-radius: 0.8rem;
`;