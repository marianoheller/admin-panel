import React from 'react';
import { Item } from 'semantic-ui-react';


export default function StatusItemsBar(props) {
  return (
    <React.Fragment>
      {props.items.map((item, i) => (
        <Item key={i}>
          <Item.Image size='tiny' src='/assets/images/wireframe/image.png' />
          <Item.Content verticalAlign='middle'>
            <Item.Header as='a' content='My Neighbor Totoro' />
          </Item.Content>
        </Item>
      ))}
    </React.Fragment>
  )
}