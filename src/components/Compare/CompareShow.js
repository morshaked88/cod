import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useData } from '../../Store/DataProvider';
import SearchError from '../Error/SearchError';
import StatsBox from './StatsBox';
import DeathStats from './DeathStats';


const CompareShow = () => {
    const { comparison } = useData();

    //re-render each time comperasion changes
    useEffect(() => {

    }, [comparison])


    //make sure data arrived
    if (comparison !== null) {

        var img1 = `/images/users/${comparison[0].username}.jpg`;
        var img2 = `/images/users/${comparison[1].username}.jpg`;
    }


    return (
        <Box>
            {comparison === null ?
                <SearchError error_code='pick players' />
                :
                <Box2>
                    <Names>
                        <Name>
                            <Img src={img1} />
                            <Title>{comparison[0].username}</Title>
                            <SubTitle>level {comparison[0].level}</SubTitle>
                        </Name>
                        <Name>
                            <Img src={img2} />
                            <Title>{comparison[1].username}</Title>
                            <SubTitle>level {comparison[1].level}</SubTitle>
                        </Name>
                    </Names>
                    <Col>
                        <TitleDiv>Games Played</TitleDiv>
                        <DeathStats val1={comparison[0].gamesPlayed} val2={comparison[1].gamesPlayed} />
                    </Col>
                    <Col>
                        <TitleDiv>Wins</TitleDiv>
                        <StatsBox val1={comparison[0].wins} val2={comparison[1].wins} />
                    </Col>
                    <Col>
                        <TitleDiv>Kills</TitleDiv>
                        <StatsBox val1={comparison[0].kills} val2={comparison[1].kills} />
                    </Col>
                    <Col>
                        <TitleDiv>score</TitleDiv>
                        <StatsBox val1={comparison[0].score} val2={comparison[1].score} />
                    </Col>
                    <Col>
                        <TitleDiv>K/D ratio</TitleDiv>
                        <StatsBox val1={comparison[0].kdRatio.toFixed(2)} val2={comparison[1].kdRatio.toFixed(2)} />
                    </Col>
                    <Col>
                        <TitleDiv>Top 10</TitleDiv>
                        <StatsBox val1={comparison[0].topTen} val2={comparison[1].topTen} />
                    </Col>
                    <Col>
                        <TitleDiv>downs</TitleDiv>
                        <StatsBox val1={comparison[0].downs} val2={comparison[1].downs} />
                    </Col>
                    <Col>
                        <TitleDiv>contracts</TitleDiv>
                        <StatsBox val1={comparison[0].contracts} val2={comparison[1].contracts} />
                    </Col>
                    <Col>
                        <TitleDiv>cash</TitleDiv>
                        <StatsBox val1={comparison[0].cash} val2={comparison[1].cash} />
                    </Col>
                    <Col>
                        <TitleDiv>deaths</TitleDiv>
                        <DeathStats val1={comparison[0].deaths} val2={comparison[1].deaths} />
                    </Col>
                </Box2>
            }

        </Box>
    )
};

export default CompareShow;

const Col = styled.div`
width: 100%;
flex-direction: column;
`;

const TitleDiv = styled.div`
background-color: #5d737e;
text-align: center;
color: white;
text-transform: uppercase;
padding: 0.5rem 0;
font-weight: bold;
`;

const Box = styled.div`
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
`;

const Box2 = styled.div`
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
margin-bottom: 2rem;
`;

const Names = styled.div`
width: 100%;
display: flex;
border: 0.2rem solid #5d737e;
margin-top: 1.8rem;
`;

const Name = styled.div`
color: white;
text-align: center;
width: 50%;
height: 100%;
padding: 0.5rem 0;

&:nth-child(1){
    border-right:0.2rem solid #5d737e;
}
`;

const Img = styled.img`
height: 5rem;
border-radius: 50%;
border: 0.2rem solid white;
`;

const Title = styled.h4``;

const SubTitle = styled.h5`

`;