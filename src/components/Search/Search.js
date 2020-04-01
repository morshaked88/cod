import React from 'react';
import styled from 'styled-components';
import { FaSearch, FaUniregistry } from 'react-icons/fa';
import { useData } from '../../Store/DataProvider';
import * as getData from '../../service/getApi';

const Search = () => {

    const { set_userSearch, set_userDB } = useData();


    let user_input;


    //get user input value
    const getValue = (e) => {
        e.preventDefault();
        user_input = e.target.value;
    }

    //send API request to get username on btn click
    const onBtnClickSearch = async (e) => {
        e.preventDefault();
        const res = await getData.getSoldier(user_input);
        set_userDB(res);
    }

    //send API request to get username data on keypress
    const EntersSearch = async (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const res = await getData.getSoldier(user_input);
            set_userDB(res);
        }

    }

    return (
        <Box>
            <Input type='text' placeholder='Enter your PSN ID' onChange={(e) => getValue(e)} onKeyPress={(e) => EntersSearch(e)} />
            <Button onClick={(e) => onBtnClickSearch(e)}><FaSearch style={{ color: '#000' }} /></Button>
        </Box>
    )
};

export default Search;

const Box = styled.div`
width: 100%;
margin-top: 1.8rem;
display: flex;
align-items: center;
justify-content: center;
`;

const Input = styled.input`
height: 3.5rem;
width: 60%;
padding-left: 0.5rem;
border: none;
border-bottom-left-radius: 0.8rem;
border-top-left-radius: 0.8rem;
outline: none;
background-color: rgba(217, 217, 217, 0.8);
`;

const Button = styled.button`
height: 3.5rem;
width: 3.5rem;
border-bottom-right-radius: 0.8rem;
border-top-right-radius: 0.8rem;
border: none;
outline: none;
background-color: rgba(173, 173, 173, 1);
`;

