import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useData } from '../../Store/DataProvider';

import Search from '../Search/Search';
import SearchError from '../Error/SearchError';
import Stats from './Stats/Stats';


const User = () => {

    const { avihaiDB, morDB, guyDB, salimiDB, shaharDB, fetching, userSearch } = useData();


    let soldier;
    let errorHappen = '';

    switch (userSearch) {
        case 'morshaked88':
            soldier = morDB;
            break;
        case 'eitam1000':
            soldier = avihaiDB;
            break;
        case 'gyrose57':
            soldier = guyDB;
            break;
        case 'yakirhs':
            soldier = salimiDB;
            break;
        case 'captainhookhit':
            soldier = shaharDB;
            break;
        case '':
            soldier = 'Please Enter PSN ID';
            break;
        default:
            soldier = 'User not found';
    }

    return (
        <Box>
            <Search />
            {typeof soldier !== 'string' ? <Stats obj={soldier} /> : <SearchError error_code={soldier} />}
        </Box>
    );
};

export default User;

const Box = styled.div`
height: 100%;
width: 100%;
`;