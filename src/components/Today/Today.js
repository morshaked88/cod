import React from 'react';
import styled from 'styled-components';
import { useData } from '../../Store/DataProvider';
import Loader from '../Spinner/Spinner';
import RankBox from './RankBox';

const Today = () => {

    const { avihaiDB,
        morDB,
        guyDB,
        salimiDB,
        shaharDB } = useData();

    const allUsers = [avihaiDB,
        morDB,
        guyDB,
        salimiDB,
        shaharDB];

    console.log(allUsers)

    let mostWins = 0;
    let mostKills = 0;
    let mostCash = 0;
    let topKills;
    let topCash;
    let topWins;

    const topRank = () => {
        if (allUsers[4] !== null) {
            for (let user of allUsers) {
                if (user.wins > mostWins) mostWins = user.wins;
                if (user.kills > mostKills) mostKills = user.kills;
                if (user.cash > mostCash) mostCash = user.cash;

            }

            for (let user of allUsers) {
                if (user.wins === mostWins) topWins = { ...user };
                if (user.kills === mostKills) topKills = { ...user };
                if (user.cash === mostCash) topCash = { ...user };
            }
        }
    }
    topRank();

    console.log()
    return (
        <Box>
            {allUsers[4] === null ? <Loader /> :
                <Box2>
                    <RankBox username={topWins.username}
                        title='most Wins'
                        amount={topWins.wins}
                    />
                    <RankBox username={topCash.username}
                        title='most Cash'
                        amount={topCash.cash}
                    />
                    <RankBox username={topKills.username}
                        title='most Kills'
                        amount={topKills.kills}
                    />
                </Box2>
            }
        </Box>
    )
};

export default Today;

const Box = styled.div`
height: 90%;
width: 100%;
`;

const Box2 = styled.div`
height: 100%;
display: flex;
flex-direction: column;
padding: 0 5%;
justify-content: space-around;
align-items: center;
`;