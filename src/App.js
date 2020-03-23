import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { DataProvider } from './Store/DataProvider';

import NavBar from './components/NavBar/NavBar';
import User from './components/User/User';

const App = () => {
  return (
    <Router>
      <DataProvider>
        <Container>
          <NavBar />
          <Route exact path='/' component={User} />
        </Container>
      </DataProvider>
    </Router>
  );
}

export default App;

const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`;