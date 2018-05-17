import React from 'react';
import styled from 'styled-components';

import StatusItemsBar from '../../components/StatusItemsBar';

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export default function Dashboard(props) {
  return (
    <DashboardContainer>
      <ItemsContainer>
        <StatusItemsBar items={[1,2]}/>
      </ItemsContainer>
    </DashboardContainer>
  )
}
