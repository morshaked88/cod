export const getSoldier = async (name) => {
    try {
        const url = `https://my.callofduty.com/api/papi-client/stats/cod/v1/title/mw/platform/psn/gamer/${name}/profile/type/mp`;

        const res = await fetch(url);
        const data = await res.json();
        const userData = {
            username: data.data.username,
            level: data.data.level,
            wins: data.data.lifetime.mode.br_dmz.properties.wins,
            kills: data.data.lifetime.mode.br_dmz.properties.kills,
            kdRatio: data.data.lifetime.mode.br_dmz.properties.kdRatio,
            downs: data.data.lifetime.mode.br_dmz.properties.downs,
            topTen: data.data.lifetime.mode.br_dmz.properties.topTen,
            contracts: data.data.lifetime.mode.br_dmz.properties.contracts,
            score: data.data.lifetime.mode.br_dmz.properties.score,
            gamesPlayed: data.data.lifetime.mode.br_dmz.properties.gamesPlayed,
            cash: data.data.lifetime.mode.br_dmz.properties.cash,
            deaths: data.data.lifetime.mode.br_dmz.properties.deaths

        };

        return userData;
    } catch (error) {
        console.log(error)
    }

}