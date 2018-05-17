import React, { Component } from 'react';
import styled from 'styled-components';

import Dashboard from './containers/Dashboard';
import Sidebar from './components/Sidebar';


const AppContainer = styled.div`
  width: 100%;
`;

const ContentContainer = styled.div`
  display: flex;
  width: 100%;
`;

export default class App extends Component {
  render() {
    return (
      <AppContainer>
        <Sidebar />
        <ContentContainer>
          <Dashboard />
        </ContentContainer>
      </AppContainer>
    );
  }
}
