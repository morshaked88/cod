import React from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { useData } from '../../Store/DataProvider';

const Search = () => {

    const { set_userSearch } = useData();


    let user_input;


    const getValue = (e) => {
        e.preventDefault();
        user_input = e.target.value;
    }

    //send API request to get weather data on btn click
    const onBtnClickSearch = (e) => {
        e.preventDefault();
        set_userSearch(user_input);

    }

    //send API request to get weather data on keypress
    const EntersSearch = (e) => {
        if (e.key === 'Enter') {
            set_userSearch(user_input);
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
`;

const Button = styled.button`
height: 3.5rem;
width: 3.5rem;
border-bottom-right-radius: 0.8rem;
border-top-right-radius: 0.8rem;
border: none;
`;

