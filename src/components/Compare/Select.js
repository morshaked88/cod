import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useData } from '../../Store/DataProvider';
import CompareShow from './CompareShow';

const Select = () => {

    const { selectOne, selectTwo, set_selectOne, set_selectTwo, get_comparison, morDB, avihaiDB, guyDB, salimiDB, shaharDB } = useData();

    let soldier1;
    let soldier2;


    //find which ID should be on comperasion
    if (selectOne !== '' && selectTwo !== '') {
        switch (selectOne) {
            case 'morshaked88':
                soldier1 = morDB;
                break;
            case 'eitam1000':
                soldier1 = avihaiDB;
                break;
            case 'gyrose57':
                soldier1 = guyDB;
                break;
            case 'yakirhs':
                soldier1 = salimiDB;
                break;
            case 'captainhookhit':
                soldier1 = shaharDB;
                break;
            default:
                soldier1 = 'Username not selected';
        }

        switch (selectTwo) {
            case 'morshaked88':
                soldier2 = morDB;
                break;
            case 'eitam1000':
                soldier2 = avihaiDB;
                break;
            case 'gyrose57':
                soldier2 = guyDB;
                break;
            case 'yakirhs':
                soldier2 = salimiDB;
                break;
            case 'captainhookhit':
                soldier2 = shaharDB;
                break;
            default:
                soldier2 = 'Username not selected';
        }

    }


    //save ID for comperasion to state
    const handleChange = (e, func) => {
        func(e.target.value);
    }


    //save the 2 options to compare to state
    const getCompareValue = (e) => {
        e.preventDefault();

        get_comparison([soldier1, soldier2])

    }

    return (
        <Box>
            <Box2>
                <SelectBox onChange={(e) => handleChange(e, set_selectOne)} value={selectOne}>
                    <Option value=''>Pick Player</Option>
                    <Option value='eitam1000'>Eitam1000</Option>
                    <Option value='morshaked88'>Morshaked88</Option>
                    <Option value='gyrose57'>Gyrose57</Option>
                    <Option value='yakirhs'>Yakirhs</Option>
                    <Option value='captainhookhit'>Captainhookhit</Option>
                </SelectBox>
                <To>to</To>
                <SelectBox onChange={(e) => handleChange(e, set_selectTwo)} value={selectTwo}>
                    <Option value=''>Pick Player</Option>
                    <Option value='eitam1000'>Eitam1000</Option>
                    <Option value='morshaked88'>Morshaked88</Option>
                    <Option value='gyrose57'>Gyrose57</Option>
                    <Option value='yakirhs'>Yakirhs</Option>
                    <Option value='captainhookhit'>Captainhookhit</Option>
                </SelectBox>
            </Box2>
            <Box3>
                <Button type='submit' value='Submit' onClick={(e) => getCompareValue(e)}>COMPARE</Button>
            </Box3>
            <CompareShow />
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