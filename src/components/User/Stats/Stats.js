import React from 'react';
import styled from 'styled-components';
import Spinner from '../../Spinner/Spinner';
import InfoBox from './InfoBox';
import { Link } from 'react-router-dom';
import SearchError from '../../Error/SearchError';

const Stats = ({ obj }) => {

    const data = { ...obj };

    //get user avatar
    const userAvatar = data.avatar ? `/images/users/${data.username}.jpg` : '/images/users/Blank.png';

    //show user name with first letter uppercase
    const upperName = data.username ? data.username.charAt(0).toUpperCase() + data.username.slice(1) : null;


    return (
        <Box>
            {data.username ?
                <Box>
                    <NameBox>
                        <Box2>
                            <Avater src={userAvatar} alt='avatar' />
                            <Name>{upperName}</Name>
                        </Box2>
                        <Button to='/compare'>Compare</Button>
                    </NameBox>
                    <Name>Level: {data.level}</Name>
                    <StatsBox>
                        <Col>
                            <InfoBox name='Wins' stats={data.wins} />
                            <InfoBox name='Top 10' stats={data.topTen} />
                        </Col>
                        <Col>
                            <InfoBox name='K/D Ratio' stats={data.kdRatio.toFixed(2)} />
                            <InfoBox name='Kills' stats={data.kills} />
                        </Col>
                        <Col>
                            <InfoBox name='Downs' stats={data.downs} />
                            <InfoBox name='Games' stats={data.gamesPlayed} />
                        </Col>
                        <Col>
                            <InfoBox name='Contracts' stats={data.contracts} />
                            <InfoBox name='Score' stats={data.score} />
                        </Col>
                        <Col>
                            <InfoBox name='Cash' stats={data.cash} />
                            <InfoBox name='Deaths' stats={data.deaths} />
                        </Col>
                    </StatsBox>
                </Box>
                :
                <SearchError error_code='user not found' />
            }


        </Box>
    )
};

export default Stats;

const Button = styled(Link)`
background-color: #535c68;
text-transform: uppercase;
padding: 1rem;
text-decoration: none;
color: white;
border-radius: 0.8rem;
`;

const Box = styled.div`
width: 100%;
height: 100%;
color: white;
display: flex;
flex-direction: column;
overflow: auto;
`;

const NameBox = styled.div`
margin-top: 2rem;
display: flex;
width: 100%;
align-items: center;
flex-direction: column;
padding: 1rem 12%;
border-bottom: 0.1rem solid white;
margin-bottom: 1.8rem;
`;

const Avater = styled.img`
height: 7rem;
border-radius: 50%;
margin-right: 1.5rem;
border: 0.2rem solid white;
`;

const Name = styled.h3`
font-size: 6vw;
text-align: center;
`;

const StatsBox = styled.div`

`;

const Col = styled.div`
width: 100%;
display: flex;
flex: 1;
justify-content: space-between;
padding: 0 15%;
margin: 1.8rem 0;
`;

const Box2 = styled.div`
width: 100%;
display: flex;
align-items: center;
`;



// {data.username}
// {data.level}
// {data.wins}
// {data.kills}
// {data.kdRatio}
// {data.downs}
// {data.topTen}
// {data.contracts}
// {data.score}
// {data.gamesPlayed}
// {data.cash}
// {data.deaths}