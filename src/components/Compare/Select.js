import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useData } from '../../Store/DataProvider';

const Select = () => {

    const { selectOne, selectTwo, set_selectOne, set_selectTwo } = useData();

    const handleChange = (e, func) => {
        func(e.target.value);
    }

    return (
        <Box>
            <Box2>
                <SelectBox onChange={(e) => handleChange(e, set_selectOne)} value={selectOne}>
                    <Option value='eitam1000'>Eitam1000</Option>
                    <Option value='morshaked88'>Morshaked88</Option>
                    <Option value='gyrose57'>Gyrose57</Option>
                    <Option value='yakirhs'>Yakirhs</Option>
                    <Option value='captainhookhit'>Captainhookhit</Option>
                </SelectBox>
                <To>to</To>
                <SelectBox onChange={(e) => handleChange(e, set_selectTwo)} value={selectTwo}>
                    <Option value='eitam1000'>Eitam1000</Option>
                    <Option value='morshaked88'>Morshaked88</Option>
                    <Option value='gyrose57'>Gyrose57</Option>
                    <Option value='yakirhs'>Yakirhs</Option>
                    <Option value='captainhookhit'>Captainhookhit</Option>
                </SelectBox>
            </Box2>
            <Box3>
                <Button>COMPARE</Button>
            </Box3>
        </Box>
    )
};

export default Select;

const Button = styled.button`
border: none;
padding: 1rem;
border-radius: 0.8rem;
font-family: 'Lato', sans-serif;
font-weight: bold;
background-color: #535c68;
color: white;
`;

const Box2 = styled.div`
display: flex;
justify-content: space-between;
padding: 10%;
`;

const Box3 = styled.div`
display: flex;
justify-content: center;
`;

const To = styled.h4`
color: white;
`;

const Box = styled.div`
width: 100%;
display: flex;
flex-direction: column;
`;

const SelectBox = styled.select`
border-radius: 0.8rem;
height: 3rem;
font-size: 1.2rem;
font-family: 'Lato', sans-serif;
font-weight: bold;

`;

const Option = styled.option`

`;