import React from 'react';
import styled from 'styled-components';
import { useData } from '../../Store/DataProvider';
import Today from '../Today/Today';

import Search from '../Search/Search';
import Stats from './Stats/Stats';


const User = () => {

    const { userDB } = useData();

    return (
        <Box>
            <Search />
            {userDB !== null ? <Stats obj={userDB} /> : <Today />}
        </Box>
    );
};

export default User;

const Box = styled.div`
height: 100%;
width: 100%;
`;