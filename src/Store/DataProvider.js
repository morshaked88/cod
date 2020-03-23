import React, { useContext, useState, createContext, useEffect } from 'react';
import * as getApi from '../service/getApi';

const ID_context = createContext();
const { Provider } = ID_context;

const useData = () => {

    const context = useContext(ID_context);
    if (!context) {
        throw new Error('context must be within the provider')
    }

    return context;
}

const DataProvider = ({ children }) => {
    //avihai database
    const [avihaiDB, set_avihaiDB] = useState(null);
    //mor database
    const [morDB, set_morDB] = useState(null);
    //guy database
    const [guyDB, set_guyDB] = useState(null);
    //yakir database
    const [salimiDB, set_salimiDB] = useState(null);
    //shahar database
    const [shaharDB, set_shaharDB] = useState(null);
    //is fetching API?
    const [fetching, set_fetching] = useState(true);

    const [userSearch, set_userSearch] = useState('');


    useEffect(() => {

        //get all users data and push it to state
        const getAllSoldiers = async () => {
            const mor = await getApi.getSoldier('morshaked88');
            const avihai = await getApi.getSoldier('eitam1000');
            const guy = await getApi.getSoldier('gyrose57');
            const salimi = await getApi.getSoldier('yakirhs');
            const shahar = await getApi.getSoldier('captainhookhit');

            //set each soldier state
            set_morDB(mor);
            set_avihaiDB(avihai);
            set_guyDB(guy);
            set_salimiDB(salimi);
            set_shaharDB(shahar);

            set_fetching(false);


        }

        getAllSoldiers();

    }, [])

    const state = {
        avihaiDB,
        morDB,
        guyDB,
        salimiDB,
        shaharDB,
        fetching,
        userSearch
    }

    const cb = {
        set_userSearch
    }


    return (
        <Provider value={{ ...state, ...cb }}>
            {children}
        </Provider>
    )

};

export { useData, DataProvider };