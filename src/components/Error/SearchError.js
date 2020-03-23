import React from 'react';
import styled from 'styled-components'

const SearchError = ({ error_code }) => (
    <Box>
        <Title>
            {error_code}
        </Title>
    </Box>
);

export default SearchError;

const Box = styled.div`
width: 100%;
height: 100%;
text-align: center;
margin-top: 1.8rem;
`;

const Title = styled.h1`
color: white;
`;