import React, {Component} from 'react';
// import { View, Text, Button } from "react-native";
import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base';

class Explore extends Component {

    render() {
        return(
              <Container>
              <Header searchBar rounded style={{
                  backgroundColor :'#3e37ff'
              }}>
                <Item>
                  <Icon name="ios-search" />
                  <Input placeholder="Search" style={{color: '#c6c4ff'}} />
                  <Icon name="ios-people" />
                </Item>
                <Button transparent>
                  <Text>Search</Text>
                </Button>
              </Header>
            </Container>
            );
    }
}

export default Explore;