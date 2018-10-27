import React, {Component} from 'react';
import { Header, Button, Body, Title } from 'native-base';
import Icon from 'react-native-vector-icons/Entypo';

class myHeader extends Component {
    render() {
        return (
            <Header style={{backgroundColor: '#ffffff', borderBottomColor: '#D3D3D3', borderBottomWidth:1 }}>                
                <Button transparent onPress={this.props.click} style={{marginEnd: 10}}>
                    <Icon name='menu' color={this.props.color?this.props.color:'#000000'} size={25}/>
                </Button>
                <Body>
                    <Title style={{color: this.props.color?this.props.color:'#000000'}} >
                        {this.props.name}
                    </Title>
                </Body>
            </Header>
        );
    }
}

export default myHeader;